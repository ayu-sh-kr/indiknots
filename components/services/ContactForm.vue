<script setup lang="ts">

import SectionHeader from "~/components/utils/SectionHeader.vue";
import {type InferType, object, string} from "yup";
import type {FormSubmitEvent} from "#ui/types";

const phoneRegExp = /^(\+\d{1,3}[- ]?)?\d{10}$/;

enum EnquiryType {
    GENERAL_INQUIRY = 'General Enquiry',
    PRODUCT_INQUIRY = 'Product Enquiry',
    PRICE_INQUIRY = 'Price Enquiry'
}

const contactSchema = object({
    name: string().required(),
    email: string().email().required(),
    phone: string().matches(phoneRegExp, 'Phone number is not valid').required(),
    inquiry: string().oneOf(Object.values(EnquiryType), 'Invalid Inquiry Type').required(),
    description: string().optional()
});

type Schema = InferType<typeof contactSchema>

const state = reactive({
    name: undefined,
    email: undefined,
    phone: undefined,
    inquiry: EnquiryType.GENERAL_INQUIRY,
    description: undefined
})

function onSubmit () {
    // Do something with event.data
    console.log('Inside Submit Function')
    console.log(`Value of Data is: ${{...state}}`)
}


</script>

<template>
<section class="px-2 sm:py-10 py-4">
    <SectionHeader text2="FORM" text1="CONTACT"/>

    <UForm :schema="contactSchema" :state="state"
           class="space-y-4 grid md:grid-cols-2 grid-cols-1 place-items-center"
           @submit="console.log('Submit Clicked')"
    >

        <div class="space-y-5 w-full md:w-1/2 px-5 md:px-0">
            <UFormGroup label="Full Name" class="w-full">
                <UInput
                    placeholder="your name"
                    icon="i-heroicons-user"
                    v-model="state.name"
                />
            </UFormGroup>

            <UFormGroup label="Email" class="w-full">
                <UInput
                    placeholder="you@example.com"
                    icon="i-heroicons-envelope"
                    v-model="state.email"
                />
            </UFormGroup>

            <UFormGroup label="Phone" class="w-full">
                <UInput
                    placeholder="you@example.com"
                    icon="i-heroicons-phone"
                    v-model="state.phone"
                />
            </UFormGroup>
        </div>

        <div class="space-y-5 md:w-1/2 w-full px-5 md:px-0">
            <UFormGroup label="Enquiry Type" class="w-full">
                <USelectMenu
                    class="w-full"
                    v-model="state.inquiry"
                    :options="Object.values(EnquiryType)"
                />
            </UFormGroup>

            <UFormGroup label="Description" class="w-full">
                <UTextarea v-model="state.description"/>
            </UFormGroup>

            <UButton type="submit" class="w-full flex justify-center" variant="solid" color="orange">
                Submit
            </UButton>
        </div>

    </UForm>


</section>
</template>

<style scoped>

</style>