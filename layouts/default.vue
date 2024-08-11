<script setup lang="ts">

import {useToggle} from "@vueuse/shared";
import AppHeader from "~/components/utils/AppHeader.vue";
import AppFooter from "~/components/utils/AppFooter.vue";

let isSideNavActive = ref(false);
let toggleSidenav = useToggle(isSideNavActive);
console.log(isSideNavActive.value)

</script>

<template>
    <div class="hide-scrollbar grid grid-rows-[auto_1fr_auto] h-screen font-dm antialiased">
        <AppHeader @side-nav="toggleSidenav"/>
        <main>
            <slot/>
        </main>
        <AppFooter/>
    </div>
    <UNotifications/>
</template>

<style scoped>

</style>