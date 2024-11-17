<script setup lang="ts">

import OrderPreview from "~/components/account/order/view/OrderPreview.vue";
import {useOrderStore} from "~/stores/order.store";
import NoContent from "~/components/utils/NoContent.vue";
import type {OrderModal} from "~/modals/order.modal";

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
    <div class="space-y-5">
        <OrderPreview v-if="orders.length > 0" v-for="order in orders" :order="order"/>
        <NoContent v-else />
    </div>
</template>

<style scoped>

</style>