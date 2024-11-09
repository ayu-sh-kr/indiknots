<script setup lang="ts">

import InputCol from "~/components/login/InputCol.vue";
import RegisterButton from "~/components/register/utils/RegisterButton.vue";
import {isEmail} from "~/utils/GeneralUtils";
import type {FormError} from "#ui/types";
import {useToastService} from "~/composables/useToastService";

const emit = defineEmits(['submit-success'])

const formData = reactive({
    email: ""
});

const formErrors = ref<FormError[]>([])
const toast = useToastService();

const send = () => {
    formErrors.value = []
    if(!isEmail(formData.email)) {
        formErrors.value.push({path: 'email', message: 'Not a valid email.'});
        toast.info(formErrors.value[0].message)
        return;
    }
    emit('submit-success');
}
</script>

<template>
    <div class="bg-white dark:bg-slate-800 shadow-xl border-adaptive rounded-xl p-4">
        <h4 class="text-lg font-semibold">Register</h4>
        <p>Add an email address to start onboarding</p>

        <div class="mt-6 space-y-3">
            <InputCol type="email" placeholder="Email Address" v-model="formData.email" :is-error="checkError('email', formErrors)"/>
            <RegisterButton @click="send" label="Send Otp" color="orange"/>
        </div>

        <div class="flex justify-between items-center mt-4 text-sm">
            <span class="flex items-center gap-x-2">Already have an account ?</span>
            <NuxtLink to="/login"><span class="text-blue-400 hover:underline cursor-pointer">Login</span></NuxtLink>
        </div>
    </div>
</template>

<style scoped>

</style>