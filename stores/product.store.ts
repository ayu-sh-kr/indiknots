import {defineStore} from 'pinia';
import {ref} from 'vue';
import type {ProductModal} from "~/modals/product.modal";
import {ProductBuilder} from "~/modals/product.modal";

export const useProductStore = defineStore('products', () => {
    const products = ref<ProductModal[]>([]);

    async function fetchOrRefresh() {
        if(products.value.length > 0) {
            return products.value;
        } else {
            await hardRefreshOrUpdate();
            return products.value;
        }
    }

    async function hardRefreshOrUpdate() {
        const response = await fetch('/data/product.json');

        if(response.status === 200) {
            const result = await response.json() as Product[]

            products.value = result.map(item => {
                const builder = new ProductBuilder();
                return builder.fromProduct(item).build();
            })

        }
    }

    function removeById(id: string) {
        products.value = products.value.filter(item => item.id !== id);
    }

    function clearProducts() {
        products.value = [];
    }

    async function getById(id: string): Promise<ProductModal | undefined> {
        if(!products.value.length) await hardRefreshOrUpdate();
        return products.value.find(product => product.id === id)
    }

    return {products, fetchOrRefresh, hardRefreshOrUpdate, removeById, clearProducts, getById}
});

export type ProductStore = typeof useProductStore;