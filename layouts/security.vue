<script setup lang="ts">

import SecurityHeader from "~/components/utils/application/SecurityHeader.vue";
</script>

<template>
    <SecurityHeader/>
    <main class="font-dm antialiased">
        <slot/>
    </main>
    <UNotifications />
</template>

<style scoped>

</style>