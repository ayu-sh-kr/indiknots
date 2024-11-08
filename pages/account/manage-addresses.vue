<script setup lang="ts">

import AccountContent from "~/components/account/layout/AccountContent.vue";
import AccountLabel from "~/components/account/utils/AccountLabel.vue";
import ListAddresses from "~/components/account/address/ListAddresses.vue";
import AddressFormPage from "~/components/account/address/AddressFormPage.vue";

definePageMeta({
    layout: 'account'
})

useHead({
    title: 'Manage Addresses'
})
</script>

<template>
    <AccountContent>
        <AccountLabel primary="Manage" secondary="Addresses" />
        <AddressFormPage />
        <ListAddresses />
    </AccountContent>
</template>

<style scoped>

</style>