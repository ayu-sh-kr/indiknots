<script setup lang="ts">

const props = defineProps({
    text: {
        type: String,
        required: true
    }
})
</script>

<template>

    <p class="text-base sm:text-lg text-gray-800 dark:text-gray-200" v-html="text"/>

</template>

<style scoped>

</style>