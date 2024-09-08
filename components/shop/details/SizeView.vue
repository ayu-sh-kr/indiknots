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
})

</script>

<template>
    <div  class="px-3 py-2 text-center cursor-pointer"
          :class="`${selected ? 'bg-orange-400 dark:bg-orange-500 text-gray-50': 'border border-gray-600 dark:border-gray-200 text-gray-800  dark:text-gray-200'}`"
    >
        {{size.length}} x {{size.width}} {{size.unit}}
    </div>
</template>

<style scoped>

</style>