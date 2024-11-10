import { defineStore } from 'pinia';
import { ref } from 'vue';

const useOrderStore = defineStore('orders', () => {

    const orders = ref<OrderModal[]>([])


    return {orders}
})