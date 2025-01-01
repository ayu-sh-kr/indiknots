<script setup lang="ts">

import LoginOTP from "~/components/login/LoginOTP.vue";

definePageMeta({
    layout: "login",
});

useHead({
    title: 'Indiknots | Login'
})
</script>

<template>
    <LoginOTP/>
</template>

<style scoped>

</style>