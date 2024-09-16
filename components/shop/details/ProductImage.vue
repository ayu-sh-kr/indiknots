<script setup lang="ts">

import ProductImagePreview from "~/components/shop/details/ProductImagePreview.vue";

const images: string[] =  [
    'https://www.rugberry.in/cdn/shop/files/DSC07485Large.jpg?v=1711915197&width=1000',
    'https://www.rugberry.in/cdn/shop/products/4437702e93af682a2668a16f6b5e89b7.png?v=1711946936&width=500',
    'https://www.rugberry.in/cdn/shop/products/97989055_3101840199840161_1935639458481176576_n.jpg?v=1718532281&width=1000',
    'https://www.rugberry.in/cdn/shop/products/23.jpg?v=1711772575&width=1000'
];

const carouselRef = ref();
const selected = ref<number>(0);

const onImageSelection = (data: number) => {
    selected.value = data;
    carouselRef.value.select(selected.value + 1);
}
</script>

<template>
    <div class="grid grid-cols-5 md:grid-cols-6 w-full gap-x-2 overflow-hidden">
        <div class="hidden md:flex col-span-1 flex-col gap-y-10 p-2">
            <ProductImagePreview v-for="(image, index) in images" :image="image" :index="index" :current="selected" @image-selected="onImageSelection"/>
        </div>

        <div class="col-span-5 p-2 h-full">
            <UCarousel ref="carouselRef" v-slot="{ item }" :items="images" :ui="{ item: 'basis-full' }" class="rounded-lg overflow-hidden">
                <img :src="item" alt="product-image" class="w-full h-full" draggable="false">
            </UCarousel>
        </div>

    </div>
</template>

<style scoped>

</style>