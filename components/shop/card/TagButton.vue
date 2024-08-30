<script setup lang="ts">

const props = defineProps({
    icon: {
        type: String,
        required: true
    }
})

</script>

<template>
<div class="p-2 rounded-full bg-gray-50 dark:bg-gray-800 cursor-pointer">
    <UIcon :name="`i-${icon}`" class="text-2xl text-gray-900/80 dark:text-slate-200 hover:text-orange-400 dark:hover:text-orange-500 "/>
</div>
</template>

<style scoped>

</style>