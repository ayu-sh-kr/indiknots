<script setup lang="ts">

defineProps({
    type: String,
    label: String,
    color: {
        type: String as () => Color,
        required: false,
        default: 'blue'
    }
})

const ButtonColor = {
    red: 'bg-red-400 dark:bg-red-500',
    blue: 'bg-blue-400 dark:bg-blue-500',
    purple: 'bg-purple-400 dark:bg-purple-500',
    indigo: 'bg-indigo-400 dark:bg-indigo-500',
    green: 'bg-green-400 dark:bg-green-500',
    orange: 'bg-orange-400 dark:bg-orange-500',
    emerald: 'bg-emerald-400 dark:bg-emerald-500',
    teal: 'bg-teal-400 dark:bg-teal-500',
    rose: 'bg-rose-400 dark:bg-rose-500',
    pink: 'bg-pink-400 dark:bg-pink-500'
};

type Color = keyof typeof ButtonColor
</script>

<template>
    <button class="w-full text-center py-2 rounded-md text-white font-semibold"
            :class="`${ButtonColor[color]}`"
    >
        {{label}}
    </button>
</template>

<style scoped>

</style>