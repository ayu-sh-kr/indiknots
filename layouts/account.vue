<script setup lang="ts">

import Scaffold from "~/components/utils/Scaffold.vue";
import AccountSidebar from "~/components/account/layout/AccountSidebar.vue";
import AppFooter from "~/components/utils/application/AppFooter.vue";
import AppHeader from "~/components/utils/application/AppHeader.vue";
</script>

<template>
    <AppHeader/>
    <Scaffold class="grid lg:grid-cols-9 md:grid-cols-7 grid-cols-1 max-sm:place-items-center min-h-[90vh] max-w-[90rem] mx-auto gap-10 relative">
        <div class="md:col-span-2 col-span-1 text-nowrap w-full md:min-w-fit">
            <AccountSidebar/>
        </div>
        <div class="lg:col-span-7 md:col-span-5 w-full">
            <slot/>
        </div>
    </Scaffold>
    <AppFooter/>
    <UNotifications/>
</template>

<style scoped>

</style>