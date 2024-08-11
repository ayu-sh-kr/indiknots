<script setup lang="ts">

import {useToggle} from "@vueuse/shared";
import AppHeader from "~/components/utils/AppHeader.vue";
import AppFooter from "~/components/utils/AppFooter.vue";

let isSideNavActive = ref(false);
let toggleSidenav = useToggle(isSideNavActive);
console.log(isSideNavActive.value)

</script>

<template>
    <AppHeader @side-nav="toggleSidenav"/>
    <main class="font-dm antialiased">
        <slot/>
    </main>
    <AppFooter/>
    <UNotifications/>
</template>

<style scoped>

</style>