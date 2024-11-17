<script setup lang="ts">

import {getSizeText} from "~/modals/product.modal";

const props = defineProps({
    product: {
        type: Object as PropType<OrderProduct>,
        required: true
    }
})
</script>

<template>
    <div class="border-adaptive px-3 py-1 shadow-xl rounded-lg font-adaptive background-adaptive">
        <h4 class="text-lg md:text-xl border-b py-1.5">Product Details</h4>
        <div class="max-md:flex-col space-y-3 flex flex-wrap justify-start gap-x-5 py-3 items-start">
            <div class="overflow-hidden rounded-xl md:w-1/6 lg:w-1/12">
                <img :src="product.image" alt="Product Image" class="w-full">
            </div>
            <div class="flex flex-wrap items-center gap-x-5 align-middle md:flex-col space-y-1.5">
                <p class="text-orange-400 dark:text-orange-500">{{product.name}}</p>
                <div class="flex items-center gap-x-3 align-middle text-gray-800 dark:text-gray-200">
                    <span class="text-sm text-gray-600 dark:text-gray-300">Color :</span>
                    <p class="font-medium text-sm">{{product.color}}</p>
                </div>
                <div class="flex items-center gap-x-3 align-middle text-gray-800 dark:text-gray-200">
                    <span class="text-sm text-gray-600 dark:text-gray-300">Size :</span>
                    <p class="font-medium text-sm">{{getSizeText(product.price.size)}}</p>
                </div>
                <div class="flex items-center gap-x-3 align-middle text-gray-800 dark:text-gray-200">
                    <span class="text-sm text-gray-600 dark:text-gray-300">Price :</span>
                    <p class="font-medium text-sm">${{product.price.value}}</p>
                </div>
            </div>
            <div class="flex-1">
                <p class="text-gray-800 dark:text-gray-200">Description</p>
                <span class="text-sm font-adaptive">
                            {{product.description}}
                        </span>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>