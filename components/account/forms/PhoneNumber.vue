<script setup lang="ts">

import EnrichInput from "~/components/account/utils/EnrichInput.vue";
import SaveButton from "~/components/account/utils/SaveButton.vue";

const disabled = ref(true);
</script>

<template>
    <div class="flex flex-col gap-y-5 font-adaptive">
        <div class="flex justify-start items-center gap-x-10">
            <h4 class="text-lg">Phone <span class="text-orange-400 dark:text-orange-500">Number</span></h4>
            <UButton @click="disabled = !disabled" color="orange" variant="link">{{ disabled ? 'Edit' : 'Cancel' }}</UButton>
        </div>
        <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-x-10">
            <EnrichInput label="Phone (add country code)" :disabled="disabled" value="+918931007054" />
            <SaveButton :hidden="disabled"/>
        </div>
    </div>
</template>

<style scoped>

</style>