<script setup lang="ts">

import {useAccountStore} from "~/stores/account.store";
import AddressView from "~/components/account/address/AddressView.vue";
import {storeToRefs} from "pinia";


const accountStore = useAccountStore();
const {addresses} =  storeToRefs(accountStore);

onMounted(() => {
    addresses.value.length == 0 ? accountStore.fetchAddresses() : true;
});

watch((accountStore.addresses), (newValue) => {
    addresses.value = newValue;
})

</script>

<template>
    <AddressView v-for="address in addresses" :key="address.id" :address="address" />
</template>

<style scoped>

</style>