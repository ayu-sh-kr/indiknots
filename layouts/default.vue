<script setup lang="ts">

import {useToggle} from "@vueuse/shared";
import AppHeader from "~/components/utils/AppHeader.vue";

let isSideNavActive = ref(false);
let toggleSidenav = useToggle(isSideNavActive);
console.log(isSideNavActive.value)

</script>

<template>
    <AppHeader @side-nav="toggleSidenav"/>
<!--    <div class="w-full min-h-screen bg-gray-800 absolute top-0 left-0 z-30">-->

<!--    </div>-->
    <slot/>
</template>

<style scoped>

</style>