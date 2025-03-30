<script setup lang="ts">

import {useOrderStore} from "~/stores/order.store";
import type {OrderModal} from "~/domains/order/order.modal";

definePageMeta({
    layout: 'account'
});


const orderStore = useOrderStore()
const orders = ref<OrderModal[]>([]);


onMounted(() => {
    orders.value = orderStore.orders;
    console.log(orders.value[0])
})

</script>

<template>

</template>

<style scoped>

</style>