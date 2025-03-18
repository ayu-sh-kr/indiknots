<script setup lang="ts">

import MetaAction from "~/components/shop/details/MetaAction.vue";
import Product from "~/components/shop/Product.vue";
import {type ProductModal} from "~/domains/product/product.modal";
import {useProductStore} from "~/stores/product.store";
import NoContent from "~/components/utils/NoContent.vue";
import Scaffold from "~/components/utils/Scaffold.vue";
import SectionHeader from "~/components/utils/SectionHeader.vue";
import {usePaginationStore} from "~/stores/pagination.store";
import {useCartStore} from "~/stores/cart.store";
import SortAction from "~/components/shop/product/SortAction.vue";
import FilterAction from "~/components/shop/product/FilterAction.vue";
import {handleProductSorting} from "~/utils/SortUtils";
import {defaultCategoryFilter, handleProductFiltering} from "~/utils/FilterUtils";

const products = ref<ProductModal[]>([]);
const pageStore = usePaginationStore();

const {productPage: page, productSort: sort, productFilter: filter} = storeToRefs(pageStore)
const productStore = useProductStore();
const productService = useProductService();
const pageSize = ref(8);

const route = useRoute();

onMounted(async () => {
    products.value = await productService.fetchOrRefresh();
    const category = route.query.category as string;
    
    if(category) filter.value = defaultCategoryFilter(category.toUpperCase() as ProductCategory)
});

watch(() => productStore.products, (newProducts) => {
    products.value = newProducts
});

let visible = computed(() => {
    const filtered = filter.value !== "NONE" ? handleProductFiltering(filter.value, products.value) : products.value;
    const sorted = handleProductSorting(filtered, sort.value)
    return sorted.slice((page.value -1) * pageSize.value, (page.value) * pageSize.value);
});

const applySort = (updatedSort: ProductSort) => {
    sort.value = updatedSort;
    pageStore.updateProductSort(updatedSort);
}

const filterStatus = ref(false)

const applyFilters = (updatedFilter: ProductFilter) => {
    console.log(updatedFilter)
    filter.value = updatedFilter;
    pageStore.updateProductFilters(updatedFilter);
}

const applyRefresh = async () => {
    await productService.hardRefreshOrUpdate();
    // remove filter on refresh
    filter.value = 'NONE';

    // close the filter component
    filterStatus.value = false;

    // Temporary patch, will be removed in future
    products.value.forEach(product => {
        useCartStore().updateProduct(product);
    });

    navigateTo({
        path: "/shop"
    })
}

</script>

<template>
    <Scaffold>
        <SectionHeader text2="Products" text1="Shop Our" />
        <div v-if="products" class="space-y-10 relative mt-8 md:mt-12 lg:mt-16">
            <div class="flex items-center justify-end flex-wrap max-sm:justify-between max-sm:mt-10 max-sm:gap-y-2 gap-x-5 px-10 text-gray-800 dark:text-gray-200 font-medium tracking-wider">

                <MetaAction @click="filterStatus = !filterStatus" text="Filters" icon="material-symbols-light:filter-alt-off-outline" :action="true"/>

                <SortAction text="Sort" icon="ph:sort-descending-light" :disabled="false" @sort-action="applySort"/>

                <MetaAction :text="`${products.length} Products`" :action="false"/>

                <MetaAction @click="applyRefresh" text="Refresh" icon="material-symbols-light:refresh-rounded" :action="true"/>
            </div>

            <Transition enter-active-class="height-enter-active" enter-from-class="height-enter-from" enter-to-class="height-enter-to" name="height"
                        leave-active-class="height-leave-active" leave-from-class="height-leave-from" leave-to-class="height-leave-to"
            >
                <div v-show="filterStatus">
                    <FilterAction @filer-action="applyFilters"/>
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