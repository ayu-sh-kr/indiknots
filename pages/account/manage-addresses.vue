<script setup lang="ts">

import AccountContent from "~/components/account/layout/AccountContent.vue";
import AccountLabel from "~/components/account/utils/AccountLabel.vue";
import AddressForm from "~/components/account/forms/AddressForm.vue";
import ListAddresses from "~/components/account/ListAddresses.vue";

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
        <AddressForm />
        <ListAddresses />
    </AccountContent>
</template>

<style scoped>

</style>