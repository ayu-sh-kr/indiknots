<script setup lang="ts">

import EnrichInput from "~/components/account/utils/EnrichInput.vue";
import InputGridLayout from "~/components/account/utils/InputGridLayout.vue";
import ShortFormLayout from "~/components/account/layout/ShortFormLayout.vue";
import type {FormError} from "#ui/types";

const props = defineProps({
    address: {
        type: Object as PropType<Address>,
        required: true
    },

    submit: {
        type: Function as PropType<() => void>,
        required: true
    },

    errors: {
        type: Object as PropType<FormError[]>,
        required: true
    }
});

const addressType = ['Home', 'Work']

const emit = defineEmits(['close-form'])

const close = () => {
    emit('close-form');
}

const isError = (path: string): boolean => {
    return props.errors.some(error => error.path === path)
}

</script>

<template>
    <ShortFormLayout class="mt-5">
        <InputGridLayout>
            <EnrichInput label="Name" :disabled="false" v-model="address.name" :is-error="isError('name')"/>
            <EnrichInput label="10-digit mobile number" :disabled="false" v-model="address.phone.number" :is-error="isError('phone')"/>
        </InputGridLayout>

        <InputGridLayout>
            <EnrichInput label="Pincode" :disabled="false" v-model="address.zipcode" :is-error="isError('zipcode')"/>
            <EnrichInput label="Locality" :disabled="false" v-model="address.locality" :is-error="isError('locality')"/>
        </InputGridLayout>

        <InputGridLayout>
            <EnrichInput class="lg:col-span-4" label="Address (Area and Street)" :disabled="false" v-model="address.area" :is-error="isError('area')"/>
        </InputGridLayout>

        <InputGridLayout>
            <EnrichInput label="City" :disabled="false" v-model="address.city" :is-error="isError('city')"/>
            <EnrichInput label="State" :disabled="false" v-model="address.state" :is-error="isError('state')"/>
        </InputGridLayout>

        <InputGridLayout>
            <EnrichInput label="Landmark (Optional)" :disabled="false" v-model="address.landmark"/>
            <EnrichInput label="Alternate Phone (Optional)" :disabled="false" v-model="address.alternatePhone.number"/>
        </InputGridLayout>

        <InputGridLayout>
            <EnrichInput label="Country" :disabled="false" v-model="address.country" :is-error="isError('country')"/>
        </InputGridLayout>
        <div class="flex flex-col gap-y-3">
            <span class="text-xs text-orange-400 dark:text-orange-500">Address Type</span>
            <div class="flex gap-x-5 items-center">
                <URadio
                    v-for="(option, index) in addressType"
                    :key="index"
                    :label="option"
                    v-model="address.addressType"
                    :value="option"
                    :disabled="false"
                />
            </div>
        </div>

        <InputGridLayout>
            <button @click="submit" class="px-3 py-2 w-full bg-orange-400 dark:bg-orange-500 text-white font-medium">Save</button>
            <button @click="close" class="px-3 py-2 w-full font-adaptive bg-slate-200 dark:bg-slate-700">Close</button>
        </InputGridLayout>

    </ShortFormLayout>
</template>

<style scoped>

</style>