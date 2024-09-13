<script setup lang="ts">

import type {ProductModal} from "~/modals/product.modal";
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
<div class="py-1 px-3 transition-all hover:bg-gray-100 dark:hover:bg-gray-800
            cursor-pointer text-sm text-gray-800 dark:text-gray-200
            grid grid-cols-5 space-x-2 w-52"
>
    <div class="w-6 h-8 col-span-1 overflow-hidden">
        <img :src="product.img" :alt="product.name" class="w-full h-full">
    </div>
    <div class="col-span-3 flex flex-col justify-start items-start w-full">
        <p class="text-xs line-clamp-1">{{product.name}}</p>
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