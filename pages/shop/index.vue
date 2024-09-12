<script setup lang="ts">

import NoContent from "~/components/utils/NoContent.vue";
import Scaffold from "~/components/utils/Scaffold.vue";
import SectionHeader from "~/components/utils/SectionHeader.vue";
import Product from "~/components/shop/Product.vue";
import {useProductStore} from "~/stores/useProductStore";

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

const visible = computed(() => {
    return products.value?.slice((page.value -1) * 10, (page.value) * 10);
})

</script>

<template>
    <Scaffold v-if="products" class="min-h-screen">
        <SectionHeader text2="Products" text1="Shop Our" />


        <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-sm:place-items-center mt-10 gap-y-20 gap-x-10">
            <Product v-for="product in visible" :key="product.id" :product="product" :cart="cart"/>
        </div>

        <div class="flex justify-center items-center mt-10 border-t pt-5">
            <UPagination v-model="page" :page-count="10" :total="products.length" show-first show-last/>
        </div>


    </Scaffold>
    <NoContent v-else/>
</template>

<style scoped>

</style>