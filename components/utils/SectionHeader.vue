<script setup lang="ts">
const props = defineProps({
    text1: {
        type: String,
        required: true
    },

    text2: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="flex justify-center text-center items-center">
        <h3>{{ text1 }} <span class="text-orange-400">{{ text2 }}</span></h3>
    </div>
</template>
<style scoped>

</style>