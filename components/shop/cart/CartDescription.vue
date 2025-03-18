<script setup lang="ts">

const props = defineProps({
    length: {
        type: Number,
        required: true
    },

    total: {
        type: Number,
        required: true
    },

    discounted: {
        type: Number,
        required: true
    }
})

</script>

<template>
    <div class="w-full bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-xl space-y-2 tracking-wide p-2 max-sm:text-sm">
        <h4 class="text-lg md:text-xl border-b py-2 px-3">Price Details</h4>
        <div class="flex justify-between items-center w-full py-1.5 px-3">
            <h4>Price ( {{length}} Items)</h4>
            <h4>${{total}}</h4>
        </div>
        <div class="flex justify-between items-center w-full py-1.5 px-3">
            <h4>Discount</h4>
            <h4 class="text-orange-400 dark:text-orange-500">-${{roundedTo2(total - discounted)}}</h4>
        </div>
        <div class="flex justify-between items-center w-full py-1.5 px-3">
            <h4>Platform Fee</h4>
            <h4 class="text-orange-400 dark:text-orange-500">0</h4>
        </div>
        <div class="flex justify-between items-center w-full py-1.5 px-3">
            <h4>Delivery Charges</h4>
            <h4 class="text-orange-400 dark:text-orange-500">Free</h4>
        </div>
        <div class="flex justify-between items-center w-full py-2 px-3 text-lg md:text-xl font-semibold border-y-2 border-dashed">
            <h4>Total Amount</h4>
            <h4>${{discounted}}</h4>
        </div>
    </div>
</template>

<style scoped>

</style>