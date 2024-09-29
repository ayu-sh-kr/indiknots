<script setup lang="ts">

import {cartAction2Handler, type CartModal} from "~/modals/cart.modal";
import ItemCount from "~/components/shop/cart/body/body/ItemCount.vue";
import InfoText from "~/components/shop/cart/body/body/InfoText.vue";
import {roundedTo2} from "../../../../../utils/GeneralUtils";

const props = defineProps({
    item: {
        type: Object as PropType<CartModal>,
        required: true
    }
});

const selectedSize = ref();
const quantity = ref(1)

const emit = defineEmits(['update-total']);

onMounted(() => {
    selectedSize.value = props.item.selectedSize();
    quantity.value = props.item.quantity
})

watch((selectedSize), (value: ProductSizeOption) => {
    props.item.updateSelectedSize(value)
});

const updatedQuantity = (value: number) => {
    quantity.value = value
    emit("update-total")
}

const removeFromCart = () => {
    cartAction2Handler(props.item, useCartStore)
}

</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-5 bg-white shadow-xl dark:bg-slate-800 px-4 py-3 rounded-xl max-md:gap-y-3">
        <div class="col-span-1 w-full flex flex-col md:justify-around max-md:justify-center items-center">
            <div class="object-contain overflow-hidden w-2/3 md:h-2/3">
                <img :src="item.product.img[0].url" :alt="item.product.img[0].text" class="w-full">
            </div>
            <ItemCount :item="item" @update-quantity="updatedQuantity"/>
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
                <span class="text-gray-600 dark:text-gray-300 line-through">${{roundedTo2(item.price.price * quantity)}}</span>
                <span class="text-gray-700 dark:text-gray-200 text-lg md:text-xl font-semibold">${{roundedTo2(item.product.getDiscountedPrice(item.price) * quantity)}}</span>
                <span class="text-orange-400 dark:text-orange-500 text-sm">{{item.price.sale_percentage}}% OFF</span>
                <span class="text-xs text-orange-400 dark:text-orange-500">DISCOUNT APPLIED</span>
            </div>
            <div class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                <div class="w">
                    <USelectMenu placeholder="Select Size" v-model="selectedSize" :options="item.product.getSizeOptions()" />
                </div>
            </div>
            <div class="flex justify-end items-center gap-x-5 w-full text-sm sm:text-base">
                <button @click="removeFromCart()" class="bg-rose-400 dark:bg-rose-500 cart-action-button">
                    <span>Remove From Cart</span>
                </button>
                <button class="bg-orange-400 dark:bg-orange-500 cart-action-button">
                    <span>Buy This Now</span>
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>

.cart-action-button {
    @apply px-3 py-1 text-white rounded-lg active:scale-95 transition-all;
}

</style>