import { defineStore } from 'pinia';
import { ref } from 'vue';


export const useCartStore = defineStore('cart', () => {

    const cart = ref<Product[]>([]);

    function isProductExist(id: string): boolean {
        return !!cart.value.find(product => product.id === id)
    }

    function addToCart(product: Product) {
        cart.value.push(product);
    }

    function removeFromCart(id: string) {
        cart.value = cart.value.filter(product => product.id !== id);
    }

    function getCartSize() {
        return cart.value.length;
    }

    return {cart, addToCart, removeFromCart, getCartSize, isProductExist}
})