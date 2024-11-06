<script setup lang="ts">

import ShortFormLayout from "~/components/account/layout/ShortFormLayout.vue";
import InputGridLayout from "~/components/account/utils/InputGridLayout.vue";
import EnrichInput from "~/components/account/utils/EnrichInput.vue";

const formOpen = ref(false)

const addressForm = reactive<Address>({
    id: "",
    name: "Ayush Kumar Jaiswal",
    phone: {
       code: "91",
       number:  ""
    },
    zipcode: "",
    locality: "",
    area: "",
    city: "",
    state: "",
    landmark: "",
    alternatePhone: {
        code: "91",
        number: ""
    },
    addressType: "Home",
    referer: ""
});

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
                <button class="px-3 py-2 w-full bg-orange-400 dark:bg-orange-500 text-white font-medium">Save</button>
                <button @click="formOpen = !formOpen" class="px-3 py-2 w-full font-adaptive bg-slate-200 dark:bg-slate-700">Close</button>
            </InputGridLayout>
        </ShortFormLayout>
    </div>
</template>

<style scoped>

</style>