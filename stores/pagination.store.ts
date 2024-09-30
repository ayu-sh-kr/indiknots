import {defineStore} from "pinia";
import {ref} from "vue";

export const usePaginationStore = defineStore('pagination', () => {
    const productPage = ref<number>(1);
    const productSort = ref<ProductSort>("None");

    const updateProductPage = (page: number) => {
        productPage.value = page;
    }

    const updateProductSort = (sort: ProductSort) => {
        productSort.value = sort;
    }

    return {productPage, productSort, updateProductPage, updateProductSort}
});