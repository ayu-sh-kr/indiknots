<script setup lang="ts">

import MetaAction from "~/components/shop/details/MetaAction.vue";
import Product from "~/components/shop/Product.vue";
import {handleProductSorting, type ProductModal} from "~/modals/product.modal";
import {useProductStore} from "~/stores/product.store";
import NoContent from "~/components/utils/NoContent.vue";
import Scaffold from "~/components/utils/Scaffold.vue";
import SectionHeader from "~/components/utils/SectionHeader.vue";
import {usePaginationStore} from "~/stores/pagination.store";
import {useCartStore} from "~/stores/cart.store";
import SortAction from "~/components/shop/product/SortAction.vue";
import FilterAction from "~/components/shop/product/FilterAction.vue";

const products = ref<ProductModal[]>([]);
const pageStore = usePaginationStore();

const {productPage: page, productSort: sort} = storeToRefs(pageStore)
const productStore = useProductStore();
const pageSize = ref(8);

onMounted(async () => {
    products.value = await productStore.fetchOrRefresh();
});

watch(() => productStore.products, (newProducts) => {
    products.value = newProducts
});

let visible = computed(() => {
    const sorted = handleProductSorting(products.value, sort.value)
    return sorted.slice((page.value -1) * pageSize.value, (page.value) * pageSize.value);
});

const applySort = (updatedSort: ProductSort) => {
    sort.value = updatedSort;
    pageStore.updateProductSort(updatedSort);
}

const filterStatus = ref(false)

</script>

<template>
    <Scaffold>
        <SectionHeader text2="Products" text1="Shop Our" />
        <div v-if="products" class="space-y-10 relative">
            <div
                class="flex items-center justify-end flex-wrap max-sm:justify-between max-sm:mt-10 max-sm:gap-y-2 gap-x-5 px-10 text-gray-800 dark:text-gray-200 font-medium tracking-wider">

                <MetaAction @click="filterStatus = !filterStatus" text="Filters" icon="material-symbols-light:filter-alt-off-outline" :action="true"/>

                <SortAction text="Sort" icon="ph:sort-descending-light" :disabled="false" @sort-action="applySort"/>

                <MetaAction :text="`${products.length} Products`" :action="false"/>

                <MetaAction @click="async () => {
                    await productStore.hardRefreshOrUpdate();
                    // Temporary patch, will be removed in future
                    products?.forEach(product => {
                       useCartStore().updateProduct(product);
                    })
                }" text="Refresh" icon="material-symbols-light:refresh-rounded" :action="true"/>
            </div>

            <Transition name="height">
                <div v-show="filterStatus">
                    <FilterAction :is-open="filterStatus"/>
                </div>
            </Transition>

            <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-sm:place-items-center gap-y-20 gap-x-10">
                <Product v-for="product in visible" :key="product.id" :product="product"/>
                <!--Expandable-->
            </div>

            <div class="flex justify-center items-center pt-10">
                <UPagination v-model="page" :page-count="pageSize" :total="products.length" show-first show-last/>
            </div>
        </div>
        <NoContent v-else/>
    </Scaffold>
</template>

<style scoped>
.height-enter-active, .height-leave-active {
    transition: height 0.5s ease-in-out;
}
.height-enter-from, .height-leave-to {
    @apply h-0 hidden;
}
.height-enter-to, .height-leave-from {
   @apply h-fit
}
</style>