<script setup lang="ts">

import NoContent from "~/components/utils/NoContent.vue";
import Scaffold from "~/components/utils/Scaffold.vue";
import SectionHeader from "~/components/utils/SectionHeader.vue";
import Product from "~/components/shop/Product.vue";
import {useProductStore} from "~/stores/useProductStore";
import MetaAction from "~/components/shop/details/MetaAction.vue";

useHead({
    title: 'Indiknots Shop'
});

const products = ref<Product[]>();
const cart: Map<number, string> = new Map();

const page = ref(1)
const productStore = useProductStore();

onMounted(async () => {
    products.value = await productStore.fetchOrRefresh()
});

watch(() => productStore.products, (newProducts) => {
    products.value = newProducts
})

const visible = computed(() => {
    return products.value?.slice((page.value -1) * 10, (page.value) * 10);
})

</script>

<template>
    <Scaffold v-if="products" class="min-h-screen space-y-10">
        <SectionHeader text2="Products" text1="Shop Our" />

        <div class="space-y-10 relative">
            <div class="flex items-center justify-end gap-x-5 px-10 text-gray-800 dark:text-gray-200 font-medium tracking-wider">

                <MetaAction text="Filters" icon="mdi:filter-multiple-outline" :action="true"/>

                <MetaAction text="Sort" icon="solar:square-sort-vertical-outline" :action="true"/>

                <MetaAction :text="`${products.length} Products`" :action="false"/>

                <MetaAction @click="async () => {
                    await productStore.hardRefreshOrUpdate()
                }" text="Refresh" icon="material-symbols-light:refresh-rounded" :action="true"/>
            </div>

            <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-sm:place-items-center gap-y-20 gap-x-10">
                <Product v-for="product in visible" :key="product.id" :product="product" :cart="cart"/>
            </div>

            <div class="flex justify-center items-center pt-10">
                <UPagination v-model="page" :page-count="10" :total="products.length" show-first show-last/>
            </div>
        </div>


    </Scaffold>
    <NoContent v-else/>
</template>

<style scoped>

</style>