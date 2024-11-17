<script setup lang="ts">
defineProps({
    status: {
        type: Object as PropType<OrderStatus>,
        required: true
    }
});
</script>

<template>
    <div class="w-full grid grid-cols-3 gap-2 border-l-2 border-orange-400 dark:border-orange-500">
        <div>
            <UBadge :label="status.value" color="blue" variant="soft"/>
        </div>
        <p class="text-sm max-md:text-xs text-gray-800 dark:text-gray-200">{{status.date.toDateString()}}</p>
        <p class="text-sm max-md:text-xs text-gray-800 dark:text-gray-200">{{status.message}}</p>
    </div>
</template>

<style scoped>

</style>