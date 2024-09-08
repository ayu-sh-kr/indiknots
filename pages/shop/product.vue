<script setup lang="ts">

import Scaffold from "~/components/utils/Scaffold.vue";
import SectionHeader from "~/components/utils/SectionHeader.vue";
import ProductDetails from "~/components/shop/ProductDetails.vue";


const route = useRoute();
const productId = route.query.id as string

useHead({
    title: 'Indiknots | Product'
});

const product = ref<Product | null>()

onMounted(() => {
    product.value = history.state ? JSON.parse(history.state['product']) as Product : null;
})
</script>

<template>
    <Scaffold>
        <SectionHeader text2="Details" text1="Product"/>
        <ProductDetails v-if="product" :product="product"/>
    </Scaffold>
</template>

<style scoped>

</style>