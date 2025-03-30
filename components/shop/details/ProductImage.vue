<script setup lang="ts">

import ProductImagePreview from "~/components/shop/details/ProductImagePreview.vue";
import type {ProductImageModal} from "~/domains/product/image/product-image.modal";

const props = defineProps({
    images: {
        type: Object as PropType<ProductImageModal[]>,
        required: true
    }
})

const carouselRef = ref();
const selected = ref<number>(0);

const onImageSelection = (data: number) => {
    selected.value = data;
    carouselRef.value.select(selected.value + 1);
}
</script>

<template>
    <div class="grid grid-cols-5 md:grid-cols-6 place-content-start w-full h-5/6 gap-x-2 overflow-hidden">
        <div class="hidden md:flex col-span-1 flex-col gap-y-10 p-2">
            <ProductImagePreview v-for="(image, index) in images" :image="image.url" :index="index" :current="selected" @image-selected="onImageSelection"/>
        </div>

        <div class="col-span-5 p-2 h-full">
            <UCarousel ref="carouselRef" v-slot="{ item }" :items="images" :ui="{ item: 'basis-full' }" class="flex justify-center items-center overflow-hidden">
                <img :src="item.url" :alt="item.id" class="w-5/6 h-5/6" draggable="false">
            </UCarousel>
        </div>

    </div>
</template>

<style scoped>

</style>