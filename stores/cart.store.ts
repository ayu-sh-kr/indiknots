import { defineStore } from 'pinia';
import { ref } from 'vue';
import type {CartModal} from "~/modals/cart.modal";


export const useCartStore = defineStore('cart', () => {

    const cart = ref<CartModal[]>([])

    function isProductExist(id: string): boolean {
        return !!cart.value.find(cart => cart.productId === id)
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

    return {cart, addToCart, removeFromCart, getCartSize, isProductExist}
});

export type CartStore = typeof useCartStore;