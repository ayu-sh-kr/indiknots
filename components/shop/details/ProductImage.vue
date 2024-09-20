<script setup lang="ts">

import ProductImagePreview from "~/components/shop/details/ProductImagePreview.vue";

const props = defineProps({
    images: {
        type: Object as PropType<ProductImage[]>,
        required: true
    }
})

const carouselRef = ref();
const selected = ref<number>(0);

const onImageSelection = (data: number) => {
    selected.value = data;
    carouselRef.value.select(selected.value + 1);
}

console.log(props.images)
</script>

<template>
    <div class="grid grid-cols-5 md:grid-cols-6 w-full h-5/6 gap-x-2 overflow-hidden">
        <div class="hidden md:flex col-span-1 flex-col gap-y-10 p-2">
            <ProductImagePreview v-for="(image, index) in images" :image="image.url" :index="index" :current="selected" @image-selected="onImageSelection"/>
        </div>

        <div class="col-span-5 p-2 h-full">
            <UCarousel ref="carouselRef" v-slot="{ item }" :items="images" :ui="{ item: 'basis-full' }" class="rounded-lg h-5/6 overflow-hidden">
                <img :src="item.url" :alt="item.text" class="w-full h-full" draggable="false">
            </UCarousel>
        </div>

    </div>
</template>

<style scoped>

</style>