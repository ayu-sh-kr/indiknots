<script setup lang="ts">

import {getPrizeText, type ProductModal} from "~/domains/product/product.modal";
import {useCartStore} from "~/stores/cart.store";

const props = defineProps({
    product: {
        type: Object as PropType<ProductModal>,
        required: true
    }
});

const cartStore = useCartStore()


const deleteFromCart = () => {
    cartStore.removeFromCart(props.product.id)
}

</script>

<template>
<div class="py-1.5 px-3 transition-all hover:bg-gray-100 dark:hover:bg-gray-800
            cursor-pointer text-sm text-gray-800 dark:text-gray-200
            grid grid-cols-6 space-x-2 w-52"
>
    <div class="w-6 h-8 col-span-1 overflow-hidden">
        <img :src="product.img[0].url" :alt="product.name" class="w-full h-full">
    </div>
    <div class="col-span-4 flex flex-col items-start gap-y-1 w-full">
        <p class="text-xs font-semibold line-clamp-1">{{product.name}}</p>
        <div class="text-xs flex justify-start items-center gap-x-2">
            <span class="w-fit text-nowrap">{{ product.getSizeText(product.sizes[0]) }}</span>
            <span class="w-fit text-nowrap">{{ getPrizeText(product, product.sizes[0]) }}</span>
        </div>
    </div>
    <div class="col-span-1 flex justify-center items-center w-full">
        <button class="active:scale-95 transition-all" @click="deleteFromCart">
            <UIcon color="red" variant="soft" name="i-ic:baseline-delete-outline" class="text-xl"/>
        </button>
    </div>
</div>
</template>

<style scoped>

</style>