import { defineStore } from 'pinia';
import { ref } from 'vue';
import {OrderModal} from "~/modals/order.modal";

export const useOrderStore = defineStore('orders', () => {

    const orders = ref<OrderModal[]>([])


    return {orders}
})