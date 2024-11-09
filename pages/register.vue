<script setup lang="ts">

import Scaffold from "~/components/utils/Scaffold.vue";
import EmailRegisterTile from "~/components/register/tiles/EmailRegisterTile.vue";
import OtpVerificationTile from "~/components/register/tiles/OtpVerificationTile.vue";

definePageMeta({
    layout: 'security'
});

useHead({
    title: 'Indiknots Register'
});


const items = [
    {
        key: 'email',
        label: 'Email Registeration',
        icon: 'i-heroicons-information-circle'
    },
    {
        key: 'otp',
        label: 'OTP Verification',
        icon: 'i-heroicons-arrow-down-tray'
    }
];

const tabIndex = ref(0);


</script>

<template>

    <Scaffold class="flex items-center justify-center h-screen w-full font-adaptive">
        <UTabs :items="items" v-model="tabIndex">
            <template #item="{item}">
                <EmailRegisterTile v-if="item.key === 'email'" @submit-success="tabIndex = 1"/>
                <OtpVerificationTile v-else-if="item.key === 'otp'" />
            </template>
        </UTabs>
    </Scaffold>

</template>

<style scoped>

</style>