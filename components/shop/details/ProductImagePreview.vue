<script setup lang="ts">
    const props = defineProps({
        image: {
            type: String,
            required: true
        },

        index: {
            type: Number,
            required: true
        },

        current: {
            type: Number,
            required: true
        }
    });

    const emit = defineEmits(['image-selected']);

    const updatedSelected = () => {
        emit("image-selected", props.index);
    }

</script>

<template>
<div @click="updatedSelected" class="w-full h-36 overflow-hidden cursor-pointer" :class="`${current === index ? 'ring-2 ring-orange-400 dark:ring-orange-500' : ''}`">
    <img :src="image" alt="product-image" class="w-full h-full">
</div>
</template>

<style scoped>

</style>