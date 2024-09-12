import { defineStore } from 'pinia';
import { ref } from 'vue';
import Product from "~/components/shop/Product.vue";

export const useProductStore = defineStore('products', () => {
    const products = ref<Product[]>([]);

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
            products.value = await response.json() as Product[]
        }
    }

    function removeById(id: string) {
        products.value = products.value.filter(item => item.id !== id);
    }

    function clearProducts() {
        products.value = [];
    }

    return {products, fetchOrRefresh, hardRefreshOrUpdate, removeById, clearProducts}
})