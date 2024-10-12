<script setup lang="ts">

import {useDark} from "@vueuse/core";
import {useToggle} from "@vueuse/shared";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
    <UButton dynamic
             :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
             :color="isDark ? 'gray' : 'orange'"
             variant="ghost"
             @click="toggleDark()"
    />
</template>

<style scoped>

</style>