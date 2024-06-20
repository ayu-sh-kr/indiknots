<script setup lang="ts">

import SectionHeader from "~/components/utils/SectionHeader.vue";
import {object, string} from "yup";
import type {FormError, FormErrorEvent, FormSubmitEvent} from "#ui/types";

const phoneRegExp = /^(\+\d{1,3}[- ]?)?\d{10}$/;

const toast = useToast();
let loading = ref<boolean>(false)

enum EnquiryType {
    GENERAL_INQUIRY = 'General Enquiry',
    PRODUCT_INQUIRY = 'Product Enquiry',
    PRICE_INQUIRY = 'Price Enquiry'
}

const contactSchema = object<ContactFormData>({
    name: string().required('Name is required'),
    email: string().email().required('Email is required'),
    phone: string()
        .min(10, 'Must be at least 10 characters')
        .matches(phoneRegExp, 'Phone number is not valid').required('Phone is required'),
    inquiry: string().oneOf(Object.values(EnquiryType), 'Invalid Inquiry Type').required('Enquiry is required'),
    description: string().optional()
});

const state = reactive<ContactFormData>({
    name: undefined,
    email: undefined,
    phone: undefined,
    inquiry: EnquiryType.GENERAL_INQUIRY,
    description: undefined
})

const nullState = reactive<ContactFormData>({ ...state });

function resetState(){
    Object.assign(state, nullState);
}

async function onSubmit (event: FormSubmitEvent<ContactFormData>) {
    loading.value = true;
    // Do something with event.data
    console.log('Inside Submit Function')
    setTimeout(() => {
        let data = event.data as ContactFormData;
        console.log(data)
        toast.add({
            color: "emerald",
            title: "Success",
            description: "Form Submitted Successfully",
            timeout: 5000,
            icon: "i-heroicons-check-circle"
        })

        resetState();
        loading.value = false;
    }, 5000);
}


const validate = (state: any): FormError[] => {
    const errors = [];

    if(!state.name) errors.push({path: 'name', message: 'Name is Required'})
    if(!state.email) errors.push({path: 'email', message: 'Email is Required'})
    if(!state.phone) errors.push({path: 'phone', message: 'Phone is Required'})
    if(!state.inquiry) errors.push({path: 'inquiry', message: 'Enquiry is Required'})

    return errors;
}

async function onError (event: FormErrorEvent) {
    const element = document.getElementById(event.errors[0].id)
    element?.focus()
    element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    console.log(event)
}


export interface ContactFormData {
    name: string | undefined,
    email: string | undefined
    phone: string | undefined,
    inquiry: EnquiryType,
    description?: string
}

</script>

<template>
<section class="px-2 sm:py-10 py-4 font-dm" id="contact-form">
    <SectionHeader text2="FORM" text1="CONTACT"/>

    <UForm :state="state"
           :validate="validate"
           class="space-y-4 grid md:grid-cols-2 grid-cols-1 place-items-center py-10"
           @submit="onSubmit" @error="onError"
    >

        <div class="space-y-5 w-full md:w-1/2 px-5 md:px-0">
            <UFormGroup label="Full Name"
                        class="w-full"
                        name="name"
            >
                <UInput
                    placeholder="your name"
                    icon="i-heroicons-user"
                    v-model="state.name"
                />
            </UFormGroup>

            <UFormGroup label="Email"
                        class="w-full"
                        name="email"
            >
                <UInput
                    placeholder="you@example.com"
                    icon="i-heroicons-envelope"
                    v-model="state.email"
                />
            </UFormGroup>

            <UFormGroup label="Phone"
                        class="w-full"
                        name="phone"
            >
                <UInput
                    placeholder="you@example.com"
                    icon="i-heroicons-phone"
                    v-model="state.phone"
                />
            </UFormGroup>
        </div>

        <div class="space-y-5 md:w-1/2 w-full px-5 md:px-0">
            <UFormGroup label="Enquiry Type"
                        class="w-full"
                        name="inquiry"
            >
                <USelectMenu
                    class="w-full"
                    v-model="state.inquiry"
                    :options="Object.values(EnquiryType)"
                />
            </UFormGroup>

            <UFormGroup label="Description" hint="Optional" class="w-full">
                <UTextarea v-model="state.description"/>
            </UFormGroup>

            <UButton :loading="loading" type="submit" class="w-full flex justify-center" variant="solid" color="orange">
                Submit
            </UButton>
        </div>

    </UForm>

</section>
</template>

<style scoped>

</style>