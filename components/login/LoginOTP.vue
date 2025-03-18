<script setup lang="ts">

import {checkError} from "~/utils/GeneralUtils";
import InputCol from "~/components/utils/input/InputCol.vue";
import type {FormError} from "#ui/types";
import type {LoginRequest} from "~/domains/security/login.modal";
import {useLoginService} from "~/composables/useLoginService";
import {useSessionStore} from "~/stores/session.store";

const email = ref<string>();
const route = useRoute();
const toast = useToastService();
const loginService = useLoginService();
const {session} = storeToRefs(useSessionStore())

const dataState = reactive<LoginRequest>({
    email: email.value!!,
    otp: ''
});


onMounted(() => {
    if(route.query.email) {
        email.value = String(route.query.email);
        dataState.email = email.value;
    }
})

const formErrors = ref<FormError[]>([])
const isSuccess = ref<boolean>(false)

const submit = async () => {
    formErrors.value = [];

    if(!isEmail(dataState.email!!)) formErrors.value.push({path: 'email', message: 'Valid email is required.'});
    if(!isNotBlank(dataState.otp)) formErrors.value.push({path: 'otp', message: 'OTP is required.'});

    if(formErrors.value.length > 0) {
        formErrors.value.forEach(error => toast.info(error.message));
        return;
    }

    const loginResponse = await loginService.verifyOtp(dataState);
    console.log(loginResponse?.accessToken);

}
</script>

<template>
    <div
        class="py-2 px-2 md:px-3 lg:px-5 flex flex-col space-y-2 md:space-y-3 lg:space-y-5 text-slate-600 dark:text-slate-200">

        <h1 class="font-light">Hello, Again</h1>

        <p class="text-lg">We are happy to have you back</p>

        <form class="w-full flex flex-col pt-4 gap-y-3">
            <div class=" space-y-4 md:space-y-6 lg:space-y-8">

                <InputCol ref="emailField" type="email" placeholder="Email Address"
                          v-model="dataState.email"
                          :is-error="checkError('email', formErrors)"
                          :is-success="isSuccess"
                          :disable="true"
                />

                <InputCol type="password" placeholder="OTP"
                          v-model="dataState.otp"
                          :is-error="checkError('otp', formErrors)"
                          :is-success="isSuccess"
                />

            </div>

            <div class="flex justify-between items-center">
                <span class="flex items-center gap-x-2"><input type="checkbox">Remember me</span>
            </div>

            <div class="space-y-5 py-8 w-full">
                <button @click="submit" type="button"
                        class="bg-orange-300 dark:bg-orange-500 rounded-md p-2 font-semibold text-white w-full">Login
                </button>
                <button type="button"
                        class="bg-gray-50 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all rounded-md p-2 font-light w-full flex items-center justify-center gap-x-3">
                    <UIcon name="i-devicon:google"/>
                    Sign in with Google
                </button>
            </div>

        </form>

    </div>
</template>

<style scoped>

</style>