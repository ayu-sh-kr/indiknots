import { defineStore } from 'pinia';
import { ref } from 'vue';
import type {CartModal} from "~/modals/cart.modal";
import type {ProductModal} from "~/modals/product.modal";


export const useCartStore = defineStore('cart', () => {

    const cart = ref<CartModal[]>([])

    function isProductExist(id: string): boolean {
        return !!cart.value.find(cart => cart.productId === id)
    }

    // TODO: implement to get cart when
    // available or refresh it by fetching again
    function getCart() {

    }

    // TODO: implement method to fetch updated cart
    function fetchCart() {

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

    return {cart, addToCart, removeFromCart, getCartSize, isProductExist, updateProduct}
});

export type CartStore = typeof useCartStore;