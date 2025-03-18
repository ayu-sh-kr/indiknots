<script setup lang="ts">

import type {OrderModal} from "~/domains/order/order.modal";
import {getDiscountedPrice} from "~/domains/product/product.modal";
import {roundedTo2} from "~/utils/GeneralUtils";

const props = defineProps({
    order: {
        type: Object as PropType<OrderModal>,
        required: true
    }
});

const getDiscountOnPrice = () => {
    if(props.order){
        const result = props.order.unit.product.price.value - getDiscountedPrice(props.order.unit.product.price);
        return roundedTo2(result);
    }

    return 0;
}

const getTotalPrice = () => {
    if(props.order) {
        const result = (props.order.unit.product.price.value - getDiscountOnPrice()) * props.order.unit.quantity;
        return roundedTo2(result);
    }

    return 0;
}
</script>

<template>
    <div class="rounded-xl border-adaptive background-adaptive px-3 py-2 shadow-xl text-gray-700 dark:text-gray-300">
        <h4 class="text-lg md:text-xl border-b py-1.5">Price Details</h4>
        <div class="flex justify-between items-center w-full py-1.5 mt-2">
            <h4>Price</h4>
            <h4>${{order.unit.product.price.value}}</h4>
        </div>
        <div class="flex justify-between items-center w-full py-1.5">
            <h4>Quantity</h4>
            <span class="text-orange-400 dark:text-orange-500">{{order.unit.quantity}}</span>
        </div>
        <div class="flex justify-between items-center w-full py-1.5">
            <h4>Discount</h4>
            <span class="text-orange-400 dark:text-orange-500">-${{getDiscountOnPrice()}}</span>
        </div>
        <div class="flex justify-between items-center w-full py-1.5">
            <h4>Platform Fee</h4>
            <h4 class="text-orange-400 dark:text-orange-500">0</h4>
        </div>
        <div class="flex justify-between items-center w-full py-1.5">
            <h4>Delivery Charges</h4>
            <h4 class="text-orange-400 dark:text-orange-500">Free</h4>
        </div>
        <div class="flex justify-between items-center w-full py-2 text-lg md:text-xl font-semibold border-y-2 border-dashed">
            <h4>Total</h4>
            <h4>
                ${{getTotalPrice()}}
            </h4>
        </div>
    </div>
</template>

<style scoped>

</style>