import { defineStore } from 'pinia';
import { ref } from 'vue';
import {OrderModal} from "~/domains/order/order.modal";

export const useOrderStore = defineStore('orders', () => {

    const orders = ref<OrderModal[]>([])

    const existsById = (id: number) => {
        return orders.value.some(order => order.id === id);
    }

    const findById = (id: number): OrderModal | undefined => {
        return orders.value.find(order => order.id === id);
    }

    const addToStore = (order: OrderModal) => {
        if(!existsById(order.id)) orders.value.push(order);
    }

    return {orders, findById, existsById, addToStore}
});

export type OrderStore = ReturnType<typeof useOrderStore>