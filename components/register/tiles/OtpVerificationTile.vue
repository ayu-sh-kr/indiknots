<script setup lang="ts">

import InputCol from "~/components/utils/input/InputCol.vue";
import RegisterButton from "~/components/register/utils/RegisterButton.vue";

const emit = defineEmits(['submit-success']);

const verify = () => {
    emit('submit-success')
}
</script>

<template>
    <div class="bg-white dark:bg-slate-800 shadow-xl border-adaptive rounded-xl p-4">
        <h4 class="text-lg font-semibold">Verify OTP</h4>
        <p>Enter the otp sent to your email to continue onboarding.</p>

        <div class="mt-6 space-y-3">
            <InputCol type="number" placeholder="OTP"/>
            <RegisterButton @click="verify" label="Verify" color="orange"/>
        </div>

        <div class="flex justify-between items-center mt-4 text-sm">
            <span class="flex items-center gap-x-2">Didn't receive any?</span>
            <span class="text-blue-400 hover:underline cursor-pointer">Resend</span>
        </div>
    </div>
</template>

<style scoped>

</style>