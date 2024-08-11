<script setup lang="ts">

const props = defineProps({
    text: {
        type: String,
        required: true
    }
})
</script>

<template>
    <h4 class="font-medium text-xl text-gray-900">{{text}}</h4>
</template>

<style scoped>

</style>