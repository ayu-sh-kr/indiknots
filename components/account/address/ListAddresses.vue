<script setup lang="ts">

import {useAccountStore} from "~/stores/account.store";
import {AddressModal} from "~/modals/address.modal";
import AddressView from "~/components/account/address/AddressView.vue";


const addresses = ref<AddressModal[]>([])
const accountStore = useAccountStore();

onMounted(() => {
    addresses.value = accountStore.addresses;
    addresses.value.length == 0 ? init() : true;
});

const init = () => {
    const addresses1: Address[] = [
        {
            id: "1",
            name: "Ayush Kumar Jaiswal",
            phone: {
                code: "91",
                number: "8931007054"
            },
            zipcode: "221201",
            locality: "Bhora Bajar",
            area: "Near Bhora Primary School, Bhora, Aneai",
            city: "Varanasi",
            state: "Uttar Pradesh",
            country: "India",
            addressType: "Home",
            referer: "",
            landmark: "",
            alternatePhone: {
                code: "",
                number: ""
            }
        },

        {
            id: "2",
            name: "Ayush Kumar Jaiswal",
            phone: {
                code: "91",
                number: "8931007054"
            },
            zipcode: "201206",
            locality: "Muradnagar",
            area: "Near Yadav Dairy, Shivam Vihar Colony, Muradnagar",
            city: "Ghaziabad",
            state: "Uttar Pradesh",
            country: "India",
            addressType: "Work",
            referer: "",
            landmark: "",
            alternatePhone: {
                code: "",
                number: ""
            }
        }
    ]

    for (const address of addresses1) {
        const addressModal = AddressModal.builder().fromAddress(address).build();
        accountStore.addAddress(addressModal);
    }
}

watch((accountStore.addresses), (newValue) => {
    addresses.value = newValue;
})

</script>

<template>
    <AddressView v-for="(address, index) in addresses" :key="index" :address="address" />
</template>

<style scoped>

</style>