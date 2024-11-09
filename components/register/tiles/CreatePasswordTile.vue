<script setup lang="ts">

import InputCol from "~/components/login/InputCol.vue";
import RegisterButton from "~/components/register/utils/RegisterButton.vue";
import type {FormError} from "#ui/types";
import {validatePassword} from "~/utils/GeneralUtils";
import {useToastService} from "~/composables/useToastService";

const toast = useToastService();

const formData = reactive({
    password: "",
    re_password: ""
});

const formErrors = ref<FormError[]>([])

const submit = () => {
    formErrors.value = [];

    if(!validatePassword(formData.password)) formErrors.value.push({path: 'password', message: 'Password value is invalid.'})
    if(!validatePassword(formData.re_password)) formErrors.value.push({path: 'password', message: 'Confirm password value is invalid.'})
    if(formData.password !== formData.re_password) formErrors.value.push({path: 'mismatch', message: "Password don't match."})

    if(formErrors.value.length >= 0) {
        toast.failure(formErrors.value[0].message)
        return;
    }

}

</script>

<template>
    <div class="bg-white dark:bg-slate-800 shadow-xl border-adaptive rounded-xl p-4">
        <h4 class="text-lg font-semibold">Password</h4>
        <p>Create a strong password for your account.</p>

        <div class="mt-6 space-y-3">
            <InputCol type="password" placeholder="Password" v-model="formData.password" :is-error="checkError('password', formErrors) || checkError('mismatch', formErrors)"/>
            <InputCol type="password" placeholder="Confirm Password" v-model="formData.re_password" :is-error="checkError('re_password', formErrors) || checkError('mismatch', formErrors)"/>
            <RegisterButton @click="submit" label="Create Account" color="orange"/>
        </div>

    </div>
</template>

<style scoped>

</style>