<script setup lang="ts">

import {type ProductModal} from "~/domains/product/product.modal";
import {useCartStore} from "~/stores/cart.store";
import {ProductUtils} from "~/domains/product/product.utils";
import type {CartModal} from "~/domains/cart/cart.modal";

const props = defineProps({
    product: {
        type: Object as PropType<ProductModal>,
        required: true
    }
});

const cartStore = useCartStore()
const cartItem = ref<CartModal | undefined>()

onMounted(() => {
    cartItem.value = cartStore.getCartItem(props.product.id)
})


const deleteFromCart = () => {
    cartStore.removeFromCart(props.product.id)
}

</script>

<template>
<div v-if="cartItem" class="py-1.5 px-3 transition-all hover:bg-gray-100 dark:hover:bg-gray-800
            cursor-pointer text-sm text-gray-800 dark:text-gray-200
            grid grid-cols-6 space-x-2 w-52"
>
    <div class="w-6 h-8 col-span-1 overflow-hidden">
        <img :src="cartItem.variant.images[0].url" :alt="product.name" class="w-full h-full">
    </div>
    <div class="col-span-4 flex flex-col items-start gap-y-1 w-full">
        <p class="text-xs font-semibold line-clamp-1">{{product.name}}</p>
        <div class="text-xs flex justify-start items-center gap-x-2">
            <span class="w-fit text-nowrap">{{ ProductUtils.getSizeText(cartItem.variant) }}</span>
            <span class="w-fit text-nowrap">{{ ProductUtils.getPrizeText(cartItem.variant) }}</span>
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