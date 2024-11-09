<script setup lang="ts">

import Scaffold from "~/components/utils/Scaffold.vue";
import EmailRegisterTile from "~/components/register/tiles/EmailRegisterTile.vue";
import OtpVerificationTile from "~/components/register/tiles/OtpVerificationTile.vue";
import CreatePasswordTile from "~/components/register/tiles/CreatePasswordTile.vue";

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
        icon: 'i-material-symbols:mail-rounded'
    },
    {
        key: 'otp',
        label: 'OTP Verification',
        icon: 'i-teenyicons:otp-solid',
    },
    {
        key: 'password',
        label: 'Create Password',
        icon: 'i-material-symbols:lock',
    }
];

const tabIndex = ref(0);


</script>

<template>

    <Scaffold class="flex items-center justify-center h-screen w-full font-adaptive">
        <UTabs :items="items" v-model="tabIndex" class="w-full md:w-2/3 lg:w-1/3">
            <template #icon="{ item, selected }">
                <UIcon :name="item.icon" class="w-4 h-4 flex-shrink-0 me-2" :class="[selected && 'text-primary-500 dark:text-primary-400']" />
            </template>
            <template #item="{item}">
                <EmailRegisterTile v-if="item.key === 'email'" @submit-success="tabIndex = 1"/>
                <OtpVerificationTile v-else-if="item.key === 'otp'" @submit-success="tabIndex = 2"/>
                <CreatePasswordTile v-else-if="item.key === 'password'" />
            </template>
        </UTabs>
    </Scaffold>

</template>

<style scoped>

</style>