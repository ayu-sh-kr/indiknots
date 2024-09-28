<script setup lang="ts">

import type {CartModal} from "~/modals/cart.modal";
import ItemCount from "~/components/shop/cart/body/body/ItemCount.vue";
import InfoText from "~/components/shop/cart/body/body/InfoText.vue";

const props = defineProps({
    item: {
        type: Object as PropType<CartModal>,
        required: true
    }
});

const selectedSize = ref(props.item.size);

onMounted(() => {
    selectedSize.value = props.item.size;
})

</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-5 bg-white shadow-xl dark:bg-slate-800 px-4 py-3 rounded-xl max-md:gap-y-3">
        <div class="col-span-1 w-full flex flex-col md:justify-around max-md:justify-center items-center">
            <div class="object-contain overflow-hidden w-2/3 md:h-2/3">
                <img :src="item.product.img[0].url" :alt="item.product.img[0].text" class="w-full">
            </div>
            <ItemCount :item="item"/>
        </div>
        <div class="col-span-4 flex flex-col gap-y-2">
            <h3>{{item.product.name}}</h3>
            <div class="flex justify-start max-md:items-center gap-x-3 text-sm w-full flex-wrap">
                <InfoText :details="item.product.getCategoryText()" heading="Category" size="sm"/>
                <InfoText :details="item.product.getMaterialText()" heading="Material" size="sm"/>
                <InfoText :details="item.product.getTechniqueText()" heading="Technique" size="sm"/>
                <InfoText :details="item.product.getSizeText(item.size)" heading="Size" size="sm"/>
            </div>
            <InfoText details="Indiknots" heading="Seller" size="sm"/>
            <div class="flex items-baseline gap-x-3 flex-wrap">
                <span class="text-gray-600 dark:text-gray-300">${{item.price.price}} </span>
                <span class="text-gray-700 dark:text-gray-200 text-xl font-semibold">${{item.product.getDiscountedPrice(item.price)}}</span>
                <span class="text-orange-400 dark:text-orange-500 text-sm">{{item.price.sale_percentage}}% OFF</span>
                <span class="text-xs text-orange-400 dark:text-orange-500">DISCOUNT APPLIED</span>
            </div>
            <div class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                <div class="w">
                    <USelectMenu placeholder="Select Size" v-model="selectedSize" :options="item.product.getSizeOptions()" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>