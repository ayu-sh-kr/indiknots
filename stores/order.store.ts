import {defineStore} from 'pinia';
import {ref} from 'vue';
import {OrderModal} from "~/domains/order/order.modal";

export const useOrderStore = defineStore('orders', () => {

  const orders = ref<OrderModal[]>([])

  /**
   * Checks if an order exists by its ID.
   * @param id - The ID of the order to check.
   * @returns True if the order exists, false otherwise.
   */
  const existsById = (id: number) => {
    return orders.value.some(order => order.id === id);
  }

  /**
   * Finds an order by its ID.
   * @param id - The ID of the order to find.
   * @returns The order if found, undefined otherwise.
   */
  const findById = (id: number): OrderModal | undefined => {
    return orders.value.find(order => order.id === id);
  }

  /**
   * Clears the current orders and adds new ones.
   * @param items - The new orders to add.
   */
  const clearAndAdd = (items: OrderModal[]) => {
    orders.value = items;
  }

  /**
   * Gets the size of the orders.
   * @returns The number of orders.
   */
  const getOrdersSize = () => {
    return orders.value.length;
  }

  return {
    orders, findById, existsById, clearAndAdd
    , getOrdersSize
  }
});

export type OrderStore = ReturnType<typeof useOrderStore>