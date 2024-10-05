<script setup lang="ts">

import Scaffold from "~/components/utils/Scaffold.vue";
import SectionHeader from "~/components/utils/SectionHeader.vue";
import ProductDetails from "~/components/shop/ProductDetails.vue";
import {type ProductModal} from "~/modals/product.modal";


const route = useRoute();
const productId = route.query.id as string

useHead({
    title: 'Indiknots | Product'
});

const product = ref<ProductModal | undefined>()

const productStore = useProductStore();

onMounted(async () => {
    product.value = await productStore.getById(productId);
});

watch((productStore.products), async () => {
    product.value = await productStore.getById(productId);
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