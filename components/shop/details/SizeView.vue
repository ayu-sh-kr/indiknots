<script setup lang="ts">

const props = defineProps({
    size: {
        type: Object as PropType<ProductSize>,
        required: true
    },

    selected: {
        type: Boolean,
        required: true
    }
});

const processProductLength = (size: ProductSize) => {

    if(size.width === 0) {
        return `Rounded ${size.length} ${size.unit}`
    }

    return `${size.length} x ${size.width} ${size.unit}`
}

</script>

<template>
    <div  class="px-2 py-1 text-center cursor-pointer"
          :class="`${selected ? 'bg-orange-400 dark:bg-orange-500 text-gray-50': 'border border-gray-600 dark:border-gray-200 text-gray-800  dark:text-gray-200'}`"
    >
        {{processProductLength(size)}}
    </div>
</template>

<style scoped>

</style>