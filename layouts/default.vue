<script setup lang="ts">

import {useToggle} from "@vueuse/shared";
import AppHeader from "~/components/utils/application/AppHeader.vue";
import AppFooter from "~/components/utils/application/AppFooter.vue";

</script>

<template>
    <AppHeader/>
    <main class="font-dm antialiased">
        <slot/>
    </main>
    <AppFooter/>
    <UNotifications/>
</template>

<style scoped>

</style>