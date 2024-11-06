<script setup lang="ts">
defineProps({
    primary: String,
    secondary: String
})
</script>

<template>
    <h4 class="text-lg">{{ primary }} <span class="text-orange-400 dark:text-orange-500">{{ secondary }}</span></h4>
</template>