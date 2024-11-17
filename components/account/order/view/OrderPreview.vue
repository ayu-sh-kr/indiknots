<script setup lang="ts">

import type {OrderModal} from "~/modals/order.modal";
import {getSizeText} from "~/modals/product.modal";
import OrderPreviewAction from "~/components/account/order/utils/OrderPreviewAction.vue";
import OrderStatusView from "~/components/account/order/view/OrderStatusView.vue";

const props = defineProps({
    order: {
        type: Object as PropType<OrderModal>,
        required: true
    }
});

const goToOrderDetails = () => {
    navigateTo({
        path: '/account/order/order-details',
        query: {id: `${props.order.id}`}
    })
}

</script>

<template>
    <div @click="goToOrderDetails" class="grid grid-cols-3 gap-x-5 rounded-2xl border-adaptive shadow-xl background-adaptive font-adaptive px-3 py-2 cursor-pointer">
        <div class="flex gap-x-5 text-left">
            <div class="bg-slate-600 rounded-2xl w-28">
            </div>
            <div class="space-y-2">
                <h4 class="font-semibold text-sm">{{ order.unit.product.name }}</h4>
                <p class="text-xs">Color: {{ order.unit.product.color }}</p>
                <p class="text-xs">Size: {{ getSizeText(order.unit.product.price.size) }}</p>
            </div>
        </div>
        <div class="grid grid-cols-2 text-left text-sm">
            <h4>Quantity: {{ order.unit.quantity }}</h4>
            <h4>Price: <span class="text-orange-400 dark:text-orange-500">${{ order.unit.price }}</span></h4>
        </div>
        <div class="space-y-2 text-left">
            <OrderStatusView :status="order.status[order.status.length - 1]" />
            <p class="text-xs">{{ order.status[order.status.length - 1].message }}</p>
            <OrderPreviewAction :action="order.action" />
        </div>
    </div>
</template>

<style scoped>

</style>