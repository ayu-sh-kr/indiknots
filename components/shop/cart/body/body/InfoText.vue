<script setup lang="ts">
const props = defineProps({
    heading: {
        type: String,
        required: true
    },

    details: {
        type: String,
        required: true
    },

    size: {
        type: String
    },
});


const Style = {
    size: {
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl'
    }
}

type size = keyof typeof Style.size

</script>

<template>
    <div class="flex gap-x-1 items-center text-nowrap dark:text-gray-300 text-gray-400" :class="`${props.size ? Style.size[props.size as size] : Style.size.xs}`">
        <span class="font-semibold">{{heading}} - </span>
        <span>{{details}}</span>
    </div>
</template>

<style scoped>

</style>