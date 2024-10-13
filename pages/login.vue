<script setup lang="ts">

import Scaffold from "~/components/utils/Scaffold.vue";
import SideGrid from "~/components/login/SideGrid.vue";
import FormGrid from "~/components/login/FormGrid.vue";

definePageMeta({
    layout: "security",
});
</script>

<template>
    <Scaffold class="flex items-center justify-center h-screen w-full">
        <div class="grid md:grid-cols-2 grid-cols-1 bg-white dark:bg-slate-800 shadow-2xl rounded-2xl p-2 sm:p-4 md:p-6 border border-gray-100 dark:border-gray-800 gap-5 h-fit w-full sm:w-4/5 lg:w-2/3 mt-20">
            <SideGrid/>
            <FormGrid/>
        </div>
    </Scaffold>
</template>

<style scoped>

</style>