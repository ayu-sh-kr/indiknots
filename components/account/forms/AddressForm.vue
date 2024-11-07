<script setup lang="ts">

import ShortFormLayout from "~/components/account/layout/ShortFormLayout.vue";
import InputGridLayout from "~/components/account/utils/InputGridLayout.vue";
import EnrichInput from "~/components/account/utils/EnrichInput.vue";

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

        <ShortFormLayout class="mt-5">
            <InputGridLayout>
                <EnrichInput label="Name" :disabled="false" v-model="addressForm.name"/>
                <EnrichInput label="10-digit mobile number" :disabled="false" v-model="addressForm.phone.number"/>
            </InputGridLayout>

            <InputGridLayout>
                <EnrichInput label="Pincode" :disabled="false" v-model="addressForm.zipcode"/>
                <EnrichInput label="Locality" :disabled="false" v-model="addressForm.locality"/>
            </InputGridLayout>

            <InputGridLayout>
                <EnrichInput class="lg:col-span-4" label="Address (Area and Street)" :disabled="false" v-model="addressForm.area"/>
            </InputGridLayout>

            <InputGridLayout>
                <EnrichInput label="City" :disabled="false" v-model="addressForm.city"/>
                <EnrichInput label="State" :disabled="false" v-model="addressForm.state"/>
            </InputGridLayout>

            <InputGridLayout>
                <EnrichInput label="Landmark (Optional)" :disabled="false" v-model="addressForm.landmark"/>
                <EnrichInput label="Alternate Phone (Optional)" :disabled="false" v-model="addressForm.alternatePhone.number"/>
            </InputGridLayout>

            <InputGridLayout>
                <EnrichInput label="Country" :disabled="false" v-model="addressForm.country" />
            </InputGridLayout>
            <div class="flex flex-col gap-y-3">
                <span class="text-xs text-orange-400 dark:text-orange-500">Address Type</span>
                <div class="flex gap-x-5 items-center">
                    <URadio
                        v-for="(option, index) in addressType"
                        :key="index"
                        :label="option"
                        v-model="addressForm.addressType"
                        :value="option"
                        :disabled="false"
                    />
                </div>
            </div>

            <InputGridLayout>
                <button @click="submit" class="px-3 py-2 w-full bg-orange-400 dark:bg-orange-500 text-white font-medium">Save</button>
                <button @click="formOpen = !formOpen" class="px-3 py-2 w-full font-adaptive bg-slate-200 dark:bg-slate-700">Close</button>
            </InputGridLayout>

        </ShortFormLayout>
    </div>
</template>

<style scoped>

</style>