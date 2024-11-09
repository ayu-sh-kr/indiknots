<script setup lang="ts">

import InputCol from "~/components/login/InputCol.vue";
import {isEmail, checkError} from "~/utils/GeneralUtils";
import type {FormError} from "#ui/types";
import {useToastService} from "~/composables/useToastService";

const dataState = reactive<DataStateType>({
    email: undefined,
    password: undefined
});

interface DataStateType {
    email: string | undefined;
    password: string | undefined;
}


const formErrors = ref<FormError[]>([]);
const isSuccess = ref(false);
const toast = useToastService();

const validateEmail = (mail: string | undefined) => {

    if (!mail || mail.trim().length === 0) return false;

    return isEmail(mail);
}

const validatePassword = (password: string | undefined): boolean => {
    if (!password || password.trim().length === 0) return false;

    const minLength = 8;
    const maliciousPattern = /[<>\/\\;\-]/;

    return password.length >= minLength && !maliciousPattern.test(password);
};

const submit = () => {
    formErrors.value = [];
    console.log(`Email: ${dataState.email}, Password: ${dataState.password}`)
    if (!validateEmail(dataState.email)) formErrors.value.push({path: 'email', message: 'Valid email is required'});

    if (!validatePassword(dataState.password)) formErrors.value.push({
        path: 'password',
        message: 'Password is required'
    });

    if (formErrors.value.length > 0) {
        isSuccess.value = false;
        toast.failure(formErrors.value[0].message)
        return;
    }

    isSuccess.value = true;

    console.log(`Email: ${dataState.email}, Password: ${dataState.password}`)
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
                />

                <InputCol type="password" placeholder="Password"
                          v-model="dataState.password"
                          :is-error="checkError('password', formErrors)"
                          :is-success="isSuccess"
                />

            </div>

            <div class="flex justify-between items-center">
                <span class="flex items-center gap-x-2"><input type="checkbox">Remember me</span>
                <span class="text-blue-400 hover:underline cursor-pointer">Forgot Password</span>
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

            <div class="flex gap-x-5">
                <span>Don't have an account?</span>
                <NuxtLink to="/register">
                    <span class="text-blue-400 hover:underline cursor-pointer">Sign Up</span>
                </NuxtLink>
            </div>

        </form>

    </div>
</template>

<style scoped>

</style>