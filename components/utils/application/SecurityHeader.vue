<script setup lang="ts">

import AppLogo from "~/components/utils/application/AppLogo.vue";
import AppDarkMode from "~/components/utils/application/AppDarkMode.vue";
</script>

<template>
    <div class="fixed top-0 left-0 z-50 w-full flex justify-between bg-white dark:bg-black shadow-xl items-center py-3 px-4">
        <AppLogo/>
        <AppDarkMode/>
    </div>
</template>

<style scoped>

</style>