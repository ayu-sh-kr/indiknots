<script setup lang="ts">

import {useToggle} from "@vueuse/shared";
import AppHeader from "~/components/utils/AppHeader.vue";
import AppFooter from "~/components/utils/AppFooter.vue";

let isSideNavActive = ref(false);
let toggleSidenav = useToggle(isSideNavActive);
console.log(isSideNavActive.value)

</script>

<template class="hide-scrollbar">
    <AppHeader @side-nav="toggleSidenav"/>
    <slot/>
    <AppFooter/>
    <UNotifications/>
</template>

<style scoped>

</style>