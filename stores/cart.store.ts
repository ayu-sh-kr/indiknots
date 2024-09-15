import { defineStore } from 'pinia';
import { ref } from 'vue';
import type {ProductModal} from "~/modals/product.modal";


export const useCartStore = defineStore('cart', () => {

    const cart = ref<ProductModal[]>([]);

    function isProductExist(id: string): boolean {
        return !!cart.value.find(product => product.id === id)
    }

    function addToCart(product: ProductModal) {
        cart.value.push(product);
    }

    function removeFromCart(id: string) {
        cart.value = cart.value.filter(product => product.id !== id);
    }

    function getCartSize() {
        return cart.value.length;
    }

    return {cart, addToCart, removeFromCart, getCartSize, isProductExist}
});

export type CartStore = typeof useCartStore;