<script setup lang="ts">

import EnrichInput from "~/components/account/utils/EnrichInput.vue";
import SaveButton from "~/components/account/utils/SaveButton.vue";
import InputGridLayout from "~/components/account/utils/InputGridLayout.vue";
import AccountLabel from "~/components/account/utils/AccountLabel.vue";
import ShortFormLayout from "~/components/account/layout/ShortFormLayout.vue";

const disabled = ref(true);

const genderOptions = [
    {
        value: 'male',
        label: 'Male',
        icon: 'i-mdi:human-male'
    },

    {
        value: 'female',
        label: 'Female',
        icon: 'i-mdi:human-female'
    }
]


const selectedGender = ref('male');

const updateGender = (value: string) => {
    selectedGender.value = value;
};

</script>

<template>
    <ShortFormLayout>
        <div class="flex justify-start items-center gap-x-10">
            <AccountLabel primary="Personal" secondary="Information"/>
            <UButton @click="disabled = !disabled" color="orange" variant="link">{{ disabled ? 'Edit' : 'Cancel' }}</UButton>
        </div>
        <InputGridLayout>
            <EnrichInput label="First Name" modelValue="Ayush" :disabled="disabled"/>
            <EnrichInput label="Middle Name" modelValue="Kumar" :disabled="disabled"/>
            <EnrichInput label="Last Name" modelValue="Jaiswal" :disabled="disabled"/>
            <SaveButton :hidden="disabled"/>
        </InputGridLayout>
        <div class="flex flex-col gap-y-3">
            <span class="text-sm">Your Gender</span>
            <div class="flex gap-x-5 items-center">
                <URadio
                    v-for="option in genderOptions"
                    :key="option.value"
                    :label="option.label"
                    :model-value="selectedGender"
                    :value="option.value"
                    @change="updateGender(option.value)"
                    :disabled="disabled"
                />
            </div>
        </div>
    </ShortFormLayout>
</template>

<style scoped>

</style>