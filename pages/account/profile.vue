<script setup lang="ts">

import PhoneNumber from "~/components/account/forms/PhoneNumber.vue";
import PersonalInformation from "~/components/account/forms/PersonalInformation.vue";
import EmailAddress from "~/components/account/forms/EmailAddress.vue";
import AccountContent from "~/components/account/layout/AccountContent.vue";

definePageMeta({
    layout: 'account',
});

useHead({
    title: 'My Profile'
})
</script>

<template>
    <AccountContent>
        <PersonalInformation/>
        <EmailAddress/>
        <PhoneNumber/>
    </AccountContent>
</template>

<style scoped>

</style>