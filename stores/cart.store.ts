import {defineStore} from 'pinia';
import {ref} from 'vue';
import type {CartItemModal} from "~/domains/cart/cart-item.modal";
import type {ProductModal} from "~/domains/product/product.modal";


export const useCartStore = defineStore('cart', () => {

  const cart = ref<CartItemModal[]>([]);

  function clearAndAdd(items: CartItemModal[]) {
    cart.value = items;
  }

  function getAll(): CartItemModal[] {
    return cart.value;
  }

  function getByPage(page: number = 0, size: number = 10) {
    const start = (page - 1) * size;
    const end = start + size;
    return cart.value.slice(start, end);
  }

  function isProductExist(id: string): boolean {
    return !!cart.value.find(cart => cart.productId === id)
  }

  function getCartItem(id: string): CartItemModal | undefined {
    return cart.value.find(cart => cart.productId === id)
  }

  /**
   * Updates the product in the cart with the given product.
   * @param product - The product to update.
   */
  const updateProduct = (product: ProductModal) => {
    cart.value = cart.value.map(item => {
      if (item.productId === product.id) {
        item.product = product
      }
      return item
    });
  }

  /**
   * Adds a product to the cart.
   * @param product - The product to add.
   */
  const addToCart = (product: CartItemModal) => {
    cart.value.push(product)
  }

  /**
   * Removes a product from the cart by its ID.
   * @param id - The ID of the product to remove.
   */
  const removeFromCart = (id: number) => {
    cart.value = cart.value.filter(modal => modal.id !== id)
  }

  /**
   * Removes a product from the cart by its item.
   * @param item - The item to remove.
   */
  const removeByItem = (item: CartItemModal) => {
    cart.value = cart.value.filter(modal => modal.productId !== item.productId && modal.variant.id !== item.variant.id)
  }

  /**
   * Gets the size of the cart.
   * @returns The number of items in the cart.
   */
  const getCartSize = () => {
    return cart.value.length
  }

  /**
   * Checks if a product with the given ID and variant ID exists in the cart.
   * @param productId - The ID of the product to check.
   * @param variantId - The ID of the variant to check.
   * @returns True if the product exists in the cart, false otherwise.
   */
  const isProductExists = (productId: string, variantId: number): boolean => {
    return cart.value.some(item => item.productId === productId && item.variant.id === variantId);
  }

  return {
    cart, addToCart, removeFromCart, getCartSize, isProductExist,
    updateProduct, getCartItem, getAll, clearAndAdd, getByPage, isProductExists,
    removeByItem
  }
});

export type CartStore = ReturnType<typeof useCartStore>;