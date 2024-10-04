import {defineStore} from "pinia";
import {ref} from "vue";

export const usePaginationStore = defineStore('pagination', () => {
    const productPage = ref<number>(1);
    const productSort = ref<ProductSort>("None");
    const productFilter = ref<ProductFilter | NONE>("NONE")

    const updateProductPage = (page: number) => {
        productPage.value = page;
    }

    const updateProductSort = (sort: ProductSort) => {
        productSort.value = sort;
    }

    const updateProductFilters = (filter: ProductFilter) => {
        productFilter.value = filter;
    }

    return {productPage, productSort, productFilter, updateProductPage, updateProductSort, updateProductFilters}
});