<script setup lang="ts">
import type {OrderModal} from "~/modals/order.modal";
import {getLocalAddress} from "~/modals/address.modal";

const props = defineProps({
    order: {
        type: Object as PropType<OrderModal>,
        required: true
    }
});
</script>

<template>
    <div class="rounded-xl border-adaptive background-adaptive px-3 py-2 shadow-xl text-gray-700 dark:text-gray-300">
        <h4 class="text-lg md:text-xl border-b py-1.5">Shipment Details</h4>

        <p class="font-semibold py-1.5 mt-2">{{order.address.name}}</p>
        <p class="text-wrap text-sm text-gray-600 dark:text-gray-300">{{getLocalAddress(order.address)}}</p>

        <p class="font-semibold py-1.5">Phone Number</p>
        <p class="text-sm">{{order.address.phone.number}}</p>
    </div>
</template>

<style scoped>

</style>