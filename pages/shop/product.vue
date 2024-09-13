<script setup lang="ts">

import Scaffold from "~/components/utils/Scaffold.vue";
import SectionHeader from "~/components/utils/SectionHeader.vue";
import ProductDetails from "~/components/shop/ProductDetails.vue";
import {ProductBuilder, type ProductModal} from "~/modals/product.modal";


const route = useRoute();
const productId = route.query.id as string

useHead({
    title: 'Indiknots | Product'
});

const product = ref<ProductModal | null>()
const builder = new ProductBuilder();

onMounted(() => {
    const parsed = history.state ? JSON.parse(history.state['product']) as Product : null;

    if(parsed) {
        product.value = builder.fromProduct(parsed).build();
    }

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