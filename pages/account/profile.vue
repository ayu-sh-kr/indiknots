<script setup lang="ts">

import PhoneNumber from "~/components/account/forms/PhoneNumber.vue";
import PersonalInformation from "~/components/account/forms/PersonalInformation.vue";
import EmailAddress from "~/components/account/forms/EmailAddress.vue";

definePageMeta({
    layout: 'account'
})
</script>

<template>
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-xl border-adaptive px-6 py-2 space-y-10 w-full">
        <PersonalInformation/>
        <EmailAddress/>
        <PhoneNumber/>
    </div>
</template>

<style scoped>

</style>