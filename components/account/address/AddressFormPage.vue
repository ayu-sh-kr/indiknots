<script setup lang="ts">

import AddressForm from "~/components/account/forms/AddressForm.vue";

import {useAccountStore} from "~/stores/account.store";
import {AddressModal} from "~/modals/address.modal";
import {clearAddressForm} from "~/utils/GeneralUtils";

const formOpen = ref(false)

let addressForm = reactive<Address>({
    id: "",
    name: "",
    phone: {
       code: "91",
       number:  ""
    },
    zipcode: "",
    locality: "",
    area: "",
    city: "",
    state: "",
    country: "",
    landmark: "",
    alternatePhone: {
        code: "91",
        number: ""
    },
    addressType: "Home",
    referer: ""
});

const addressType = ['Home', 'Work']


const accountStore = useAccountStore();

const submit = () => {
    console.log(addressForm)
    const addressModal = AddressModal.builder()
        .fromAddress(addressForm)
        .build();
    accountStore.addAddress(addressModal);
    clearAddressForm(addressForm);
    formOpen.value = false;
}

const close = () => {
    formOpen.value = !formOpen.value;
}

</script>

<template>
    <div v-if="!formOpen"
         @click="formOpen = !formOpen"
        class="border-adaptive py-2 px-3 text-sm font-medium text-orange-400 dark:text-orange-500 flex justify-start items-center gap-x-5 cursor-pointer">
        <Icon name="i-heroicons:plus" class="text-xl"/>
        <h4>ADD A NEW ADDRESS</h4>
    </div>

    <div v-else class="border-adaptive bg-orange-100/20 dark:bg-orange-900/10 px-3 py-2">
        <h4 class="text-sm text-orange-400 dark:text-orange-500">ADD A NEW ADDRESS</h4>
        <AddressForm :address="addressForm" :submit="submit" @close-form="close"/>
    </div>
</template>

<style scoped>

</style>