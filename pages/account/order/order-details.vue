<script setup lang="ts">

import {OrderModal} from "~/domains/order/order.modal";
import SectionHeader from "~/components/utils/SectionHeader.vue";
import {OrderItemModal} from "~/domains/order/item/order-item.modal";
import {useToastService} from "~/composables/useToastService";
import {useOrderService} from "~/composables/useOrderService";
import Scaffold from "~/components/utils/Scaffold.vue";

const route = useRoute();
const orderService = useOrderService();

const order = ref<OrderModal>()
const toast = useToastService();

const items = ref<OrderItemModal[]>([])

onMounted(async () => {
    await init()
});

const init = async () => {
    const id = route.query["id"];
    let orderId: number;

    if (Array.isArray(id)) {
        orderId = parseInt(id[0] as string, 10);
    } else {
        orderId = parseInt(id as string, 10);
    }

    toast.info(`Order id is ${orderId}`);
    order.value = await orderService.fetchOne(orderId);

    if(order.value) {
        items.value = order.value.items;
    }
}

</script>

<template>
    <Scaffold>
        <SectionHeader text2="Details" text1="Order" />
    </Scaffold>
</template>

<style scoped>

</style>