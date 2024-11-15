<script setup lang="ts">
import {useOrderStore} from "~/stores/order.store";
import type {OrderModal} from "~/modals/order.modal";
import Scaffold from "~/components/utils/Scaffold.vue";
import SectionHeader from "~/components/utils/SectionHeader.vue";
import NoContent from "~/components/utils/NoContent.vue";

const route = useRoute();
const orderStore = useOrderStore();

const order = ref<OrderModal>()
const toast = useToastService();

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
    console.log(order.value)
    console.log(orderStore.orders)
}

</script>

<template>
    <Scaffold>
        <SectionHeader text2="Details" text1="Order" />
        <div v-if="order" class="grid lg:grid-cols-9 md:grid-cols-7 grid-cols-1 max-sm:place-items-center min-h-[90vh] max-w-[90rem] mx-auto gap-10 relative">

            <div class="lg:col-span-7 md:col-span-5 w-full">

            </div>

            <div class="md:col-span-2 col-span-1 text-nowrap w-full md:min-w-fit">
                // Price Details
                // Shipment Details
            </div>
        </div>
        <NoContent v-else />
    </Scaffold>
</template>

<style scoped>

</style>