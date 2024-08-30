<script setup lang="ts">

import NoContent from "~/components/utils/NoContent.vue";
import Scaffold from "~/components/utils/Scaffold.vue";
import SectionHeader from "~/components/utils/SectionHeader.vue";
import Product from "~/components/shop/Product.vue";

useHead({
    title: 'Indiknots Shop'
});

const products = ref<Product[]>();
const cart: Map<number, string> = new Map();

onMounted(async () => {
    const response = await fetch('/data/product.json');

    if(response.status === 200) {
        products.value = await response.json() as Product[]
    }
})

</script>

<template>
    <Scaffold v-if="products" class="min-h-screen">
        <SectionHeader text2="Products" text1="Shop Our" />


        <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-sm:place-items-center mt-10">
            <Product v-for="product in products" :key="product.id" :product="product" :cart="cart"/>
        </div>


    </Scaffold>
    <NoContent v-else/>
</template>

<style scoped>

</style>