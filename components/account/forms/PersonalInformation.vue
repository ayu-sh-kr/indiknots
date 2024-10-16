<script setup lang="ts">

import EnrichInput from "~/components/account/utils/EnrichInput.vue";
import SaveButton from "~/components/account/utils/SaveButton.vue";

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
    <div class="flex flex-col gap-y-5 font-adaptive">
        <div class="flex justify-start items-center gap-x-10">
            <h4 class="text-lg">Personal <span class="text-orange-400 dark:text-orange-500">Information</span></h4>
            <UButton @click="disabled = !disabled" color="orange" variant="link">{{ disabled ? 'Edit' : 'Cancel' }}</UButton>
        </div>
        <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-x-10 gap-y-5 h-fit">
            <EnrichInput label="First Name" value="Ayush" :disabled="disabled"/>
            <EnrichInput label="Middle Name" value="Kumar" :disabled="disabled"/>
            <EnrichInput label="Last Name" value="Jaiswal" :disabled="disabled"/>
            <SaveButton :hidden="disabled"/>
        </div>
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
    </div>
</template>

<style scoped>

</style>