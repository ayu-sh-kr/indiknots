<script setup lang="ts">

import {useOrderStore} from "~/stores/order.store";
import type {OrderModal} from "~/modals/order.modal";
import SectionHeader from "~/components/utils/SectionHeader.vue";
import NoContent from "~/components/utils/NoContent.vue";
import OrderPaymentDescription from "~/components/account/order/view/OrderPaymentDescription.vue";
import OrderShipmentDescription from "~/components/account/order/view/OrderShipmentDescription.vue";
import OrderProductDescription from "~/components/account/order/view/OrderProductDescription.vue";
import OrderStatusDescription from "~/components/account/order/view/OrderStatusDescription.vue";

const route = useRoute();
const orderStore = useOrderStore();

const order = ref<OrderModal>()
const toast = useToastService();

const product = ref<OrderProduct>()

onMounted(() => {
    init()
});

const init = () => {
    const id = route.query["id"];
    let orderId: number;

    if (Array.isArray(id)) {
        orderId = parseInt(id[0] as string, 10);
    } else {
        orderId = parseInt(id as string, 10);
    }

    toast.info(`Order id is ${orderId}`);
    order.value = orderStore.findById(orderId);
    product.value = order.value?.unit.product
    order.value?.status.push({
        value: 'Order Confirmed',
        date: new Date(),
        message: 'Seller has accepted your order.'
    })
}

</script>

<template>
    <SectionHeader text2="Details" text1="Order"/>
    <div v-if="order && product" class="mt-10 grid lg:grid-cols-9 md:grid-cols-7 grid-cols-1 max-sm:place-items-center min-h-[90vh] max-w-[90rem] mx-auto gap-10 relative">

        <div class="lg:col-span-7 md:col-span-5 w-full">
            <OrderProductDescription :product="product" />
            <div class="border-adaptive mt-10 px-3 py-2 shadow-xl background-adaptive rounded-xl">
                <OrderStatusDescription v-for="status in order.status" :status="status" />
            </div>
        </div>

        <div class="md:col-span-2 col-span-1 text-nowrap w-full md:min-w-fit space-y-10">
            <OrderPaymentDescription :order="order"/>
            <OrderShipmentDescription :address="order.address"/>
        </div>
    </div>
    <NoContent v-else/>
</template>

<style scoped>

</style>