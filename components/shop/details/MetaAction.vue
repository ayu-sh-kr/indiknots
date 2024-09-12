<script setup lang="ts">

const props = defineProps({
    icon: {
        type: String,
        required: false
    },

    text: {
        type: String,
        required: true
    },

    action: {
        type: Boolean,
        required: true
    }
});

const StyleConfig = {
    action: 'active:scale-95 cursor-pointer hover:bg-orange-100 dark:hover:bg-orange-800/20 hover:text-orange-400 dark:hover:text-orange-500'
}

</script>

<template>
    <p class="flex items-center gap-x-2 px-2 py-1 rounded-md transition-all duration-300"
       :class="`${action && `${StyleConfig.action}`}`"
    >
        {{text}} <UIcon v-if="icon" :name="`i-${icon}`" class="text-xl"/>
    </p>
</template>

<style scoped>

</style>