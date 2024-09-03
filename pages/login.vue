<script setup lang="ts">

import Scaffold from "~/components/utils/Scaffold.vue";
import {useDark} from "@vueuse/core";
import SideGrid from "~/components/login/SideGrid.vue";
import FormGrid from "~/components/login/FormGrid.vue";

definePageMeta({
    layout: false
});

const isDark = useDark();
isDark.value = false;




</script>

<template>
    <Scaffold class="flex items-center justify-center bg-slate-200 h-screen w-full">

        <div class="grid md:grid-cols-2 grid-cols-1 bg-white shadow-2xl rounded-2xl p-2 sm:p-4 md:p-6 border border-gray-100 gap-5 h-fit w-full sm:w-4/5 lg:w-2/3">

            <SideGrid/>

            <FormGrid/>

        </div>
    </Scaffold>
</template>

<style scoped>

</style>