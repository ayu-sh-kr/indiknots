<script setup lang="ts">
defineProps({
    status: {
        type: Object as PropType<OrderStatus>,
        required: true
    }
})
</script>

<template>
    <UBadge v-if="status.value === 'Order Confirmed'" color="sky" variant="soft" :label="status.value + ' on ' + status.date.toDateString()"/>
    <UBadge v-else-if="status.value === 'Delivered'" color="emerald" variant="soft" :label="status.value + ' on ' + status.date.toDateString()"/>
    <UBadge v-else-if="status.value === ('Cancelled' || 'Refunded')" color="red" variant="soft" :label="status.value + ' on ' + status.date.toDateString()"/>
    <UBadge v-else-if="status.value === 'Shipped'" color="orange" variant="soft" :label="status.value + ' on ' + status.date.toDateString()"/>
    <UBadge v-else-if="status.value === 'Pending'" color="yellow" variant="soft" :label="status.value + ' on ' + status.date.toDateString()"/>
</template>

<style scoped>

</style>