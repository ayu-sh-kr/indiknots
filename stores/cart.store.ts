import { defineStore } from 'pinia';
import { ref } from 'vue';
import type {CartModal} from "~/domains/cart/cart.modal";
import type {ProductModal} from "~/domains/product/product.modal";


export const useCartStore = defineStore('cart', () => {

    const cart = ref<CartModal[]>([])

    function isProductExist(id: string): boolean {
        return !!cart.value.find(cart => cart.productId === id)
    }

    function getCartItem(id: string): CartModal | undefined {
        return cart.value.find(cart => cart.productId === id)
    }

    function updateProduct(product: ProductModal) {
        cart.value = cart.value.map(item => {
            if (item.productId === product.id) {
                item.product = product
            }
            return item
        });
    }

    function addToCart(product: CartModal) {
        cart.value.push(product)
    }

    function removeFromCart(id: string) {
        cart.value = cart.value.filter(modal => modal.productId !== id)
    }

    function getCartSize() {
        return cart.value.length
    }

    return {cart, addToCart, removeFromCart, getCartSize, isProductExist, updateProduct, getCartItem}
});

export type CartStore = ReturnType<typeof useCartStore>;