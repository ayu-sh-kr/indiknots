<script setup lang="ts">

const props = defineProps({
    url: String
})

</script>

<template>
    <div class="w-[280px] h-96 overflow-hidden bg-transparent">
        <img :src="url" alt="Rug Image" class="w-full h-full">
    </div>
</template>

<style scoped>

</style>