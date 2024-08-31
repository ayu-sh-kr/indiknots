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
    <Scaffold class="grid place-items-center h-screen bg-slate-200 w-full">

        <div class="grid md:grid-cols-2 grid-cols-1 bg-white shadow-2xl rounded-2xl p-2 sm:p-4 md:p-6 lg:p-8 border border-gray-100 gap-5 min-w-[340px] sm:min-w-[580px] md:min-w-[720px] lg:w-[1080px]">

            <SideGrid/>

            <FormGrid/>

        </div>
    </Scaffold>
</template>

<style scoped>

</style>