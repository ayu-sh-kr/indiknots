<script setup lang="ts">

import EnrichInput from "~/components/account/utils/EnrichInput.vue";
import SaveButton from "~/components/account/utils/SaveButton.vue";
import FormLayout from "~/components/account/layout/ShortFormLayout.vue";
import InputGridLayout from "~/components/account/utils/InputGridLayout.vue";

const disabled = ref(true);
</script>

<template>
    <FormLayout>
        <div class="flex justify-start items-center gap-x-10">
            <h4 class="text-lg">Phone <span class="text-orange-400 dark:text-orange-500">Number</span></h4>
            <UButton @click="disabled = !disabled" color="orange" variant="link">{{ disabled ? 'Edit' : 'Cancel' }}</UButton>
        </div>
        <InputGridLayout>
            <EnrichInput label="Phone (add country code)" :disabled="disabled" modelValue="+918931007054" />
            <SaveButton :hidden="disabled"/>
        </InputGridLayout>
    </FormLayout>
</template>

<style scoped>

</style>