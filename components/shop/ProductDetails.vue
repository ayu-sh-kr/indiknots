<script setup lang="ts">
import NoContent from "~/components/utils/NoContent.vue";
import ProductMeta from "~/components/shop/details/ProductMeta.vue";
import type {ProductModal} from "~/domains/product/product.modal";
import ProductImage from "~/components/shop/details/ProductImage.vue";

const props = defineProps({
    product: {
        type: Object as PropType<ProductModal>,
        required: true
    }
});

</script>

<template>
<div v-if="product" class="relative grid grid-cols-1 md:grid-cols-2 mt-10 tracking-wider place-items-start gap-y-10 px-5">
    <ProductImage :images="product.img"/>
    <ProductMeta :product="product" />
</div>
<NoContent v-else />
</template>

<style scoped>

</style>