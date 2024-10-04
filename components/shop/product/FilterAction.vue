<script setup lang="ts">

import RangeUI from "~/components/utils/RangeUI.vue";

const props = defineProps({
    isOpen: {
        type: Boolean,
        required: true,
        default: false
    }
});

</script>

<template>
<div class="overflow-hidden p-2 grid grid-cols-6 gap-x-5 gap-y-3 text-gray-800 dark:text-gray-200 bg-slate-100 dark:bg-slate-900 py-4 rounded-xl">
    <USelectMenu placeholder="Choose Category"/>
    <USelectMenu placeholder="Choose Technique" />
    <USelectMenu placeholder="Choose Material" />
    <UPopover>
        <UButton color="gray" class="w-full flex items-center justify-center">Low to High (Price)</UButton>
        <template #panel>
            <div class="w-56 p-2">
                <RangeUI :max="10000" :min="0" />
            </div>
        </template>
    </UPopover>
    <UPopover>
        <UButton color="gray" class="w-full flex items-center justify-center">High to Low (Price)</UButton>
        <template #panel>
            <div class="w-56 p-2">
                <RangeUI :max="10000" :min="0" />
            </div>
        </template>
    </UPopover>

    <UButton class="flex justify-center active:scale-95 transition-all">
        Apply
    </UButton>
</div>
</template>

<style scoped>

</style>