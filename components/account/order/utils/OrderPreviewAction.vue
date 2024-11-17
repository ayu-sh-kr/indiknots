<script setup lang="ts">

defineProps({
    action: {
        type: String as PropType<OrderAction>,
        required: true
    }
})
</script>

<template>
    <button v-if="action === 'Cancellable'" class="order-action text-rose-400 dark:text-rose-500">Cancel</button>
    <button v-if="action === 'Replaceable'" class="order-action text-orange-400 dark:text-orange-500">Replace</button>
    <button v-else-if="action === 'Returnable'" class="order-action text-emerald-400 dark:text-emerald-500">Return</button>
</template>

<style scoped>

.order-action {
    @apply hover:underline underline-offset-2 text-sm
}

</style>