<script setup lang="ts">

import RangeUI from "~/components/utils/RangeUI.vue";

const props = defineProps({
    isOpen: {
        type: Boolean,
        required: true,
        default: false
    }
})

</script>

<template>
<div class="overflow-hidden p-2 grid grid-cols-6 gap-x-5 gap-y-3 text-gray-800 dark:text-gray-200">
    <USelectMenu placeholder="Choose Category"/>
    <USelectMenu placeholder="Choose Technique" />
    <USelectMenu placeholder="Choose Material" />
    <RangeUI :max="10000" :min="0" />
</div>
</template>

<style scoped>

</style>