<script setup lang="ts">

import MetaAction from "~/components/shop/details/MetaAction.vue";
import Product from "~/components/shop/Product.vue";
import type {ProductModal} from "~/modals/product.modal";
import {useProductStore} from "~/stores/product.store";
import NoContent from "~/components/utils/NoContent.vue";
import Scaffold from "~/components/utils/Scaffold.vue";
import SectionHeader from "~/components/utils/SectionHeader.vue";
import {usePaginationStore} from "~/stores/pagination.store";

const products = ref<ProductModal[]>();
const pageStore = usePaginationStore();

const {productPage: page} = storeToRefs(pageStore)
const productStore = useProductStore();

onMounted(async () => {
    products.value = await productStore.fetchOrRefresh();
});

watch(() => productStore.products, (newProducts) => {
    products.value = newProducts
});

const visible = computed(() => {
    return products.value?.slice((page.value -1) * 8, (page.value) * 8);
});

</script>

<template>
    <Scaffold>
        <SectionHeader text2="Products" text1="Shop Our" />
        <div v-if="products" class="space-y-10 relative">
            <div
                class="flex items-center justify-end gap-x-5 px-10 text-gray-800 dark:text-gray-200 font-medium tracking-wider">

                <MetaAction text="Filters" icon="material-symbols-light:filter-alt-off-outline" :action="true"/>

                <MetaAction text="Sort" icon="ph:sort-descending-light" :action="true"/>

                <MetaAction :text="`${products.length} Products`" :action="false"/>

                <MetaAction @click="async () => {
                    await productStore.hardRefreshOrUpdate()
                }" text="Refresh" icon="material-symbols-light:refresh-rounded" :action="true"/>
            </div>

            <div
                class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-sm:place-items-center gap-y-20 gap-x-10">
                <Product v-for="product in visible" :key="product.id" :product="product"/>
            </div>

            <div class="flex justify-center items-center pt-10">
                <UPagination v-model="page" :page-count="8" :total="products.length" show-first show-last/>
            </div>
        </div>
        <NoContent v-else/>
    </Scaffold>
</template>

<style scoped>

</style>