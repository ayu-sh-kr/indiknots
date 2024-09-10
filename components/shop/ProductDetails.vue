<script setup lang="ts">
import NoContent from "~/components/utils/NoContent.vue";
import ProductMeta from "~/components/shop/details/ProductMeta.vue";

const props = defineProps({
    product: {
        type: Object as PropType<Product>,
        required: true
    }
});

</script>

<template>
<div v-if="product" class="relative grid grid-cols-1 md:grid-cols-2 mt-10 tracking-wider place-items-start gap-y-10 px-5">
    <div class="flex flex-col items-center gap-y-3 w-full overflow-scroll">
        <img :src="product.img" :alt="product.name" class="w-[460px]">
    </div>
    <ProductMeta :product="product" />
</div>
<NoContent v-else />
</template>

<style scoped>

</style>