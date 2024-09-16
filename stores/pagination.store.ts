import {defineStore} from "pinia";
import {ref} from "vue";

export const usePaginationStore = defineStore('pagination', () => {
    const productPage = ref<number>(1);

    const updateProductPage = (page: number) => {
        productPage.value = page;
    }

    return {productPage, updateProductPage}
});