<script setup lang="ts">

import InputCol from "~/components/login/InputCol.vue";

const dataState = reactive<DataStateType>({
    email: undefined,
    password: undefined
});

const errorState = reactive<ErrorStateType>(
    {
        emailState: "DEFAULT",
        passwordState: "DEFAULT"
    }
);

interface ErrorStateType {
    emailState: InputState;
    passwordState: InputState;
}

interface DataStateType {
    email: string | undefined;
    password: string | undefined;
}



const validateEmail = (mail: string) => {

    if(!mail || mail.trim().length === 0) {
        errorState.emailState = "DEFAULT";
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(mail)) {
        errorState.emailState = "ERROR"
    } else {
        dataState.email = mail;
        errorState.emailState = "SUCCESS"
    }
}

const validatePassword = (password: string) => {
    if (!password || password.trim().length === 0) {
        errorState.passwordState = "DEFAULT";
        return;
    }

    const minLength = 8;
    const maliciousPattern = /[<>\/\\;\-]/;

    if (password.length < minLength || maliciousPattern.test(password)) {
        errorState.passwordState = "ERROR";
    } else {
        dataState.password = password;
        errorState.passwordState = "SUCCESS";
    }
};


</script>

<template>
    <div class="w-full py-2 sm:py-4 md:py-8 lg:py-12 px-2 md:px-3 lg:px-5 flex flex-col space-y-2 md:space-y-3 lg:space-y-5 text-slate-600">

        <h1 class="font-light">Hello, Again</h1>

        <p class="text-lg">We are happy to have you back</p>

        <form class="w-full flex flex-col pt-4 md:pt-6 lg:pt-10 gap-y-3">
            <div class=" space-y-4 md:space-y-6 lg:space-y-10">

                <InputCol ref="emailField" type="email" placeholder="Email Address"
                          @update:model-value="validateEmail"
                          message="Not a valid email"
                          :error="errorState.emailState"
                />

                <InputCol type="password" placeholder="Password"
                          :error="errorState.passwordState"
                          @update:model-value="validatePassword"
                />

            </div>

            <div class="flex justify-between items-center">
                <span class="flex items-center gap-x-2"><input type="checkbox">Remember me</span>
                <span class="text-blue-400 hover:underline cursor-pointer">Forgot Password</span>
            </div>

            <div class="space-y-5 py-8 w-full">
                <button @click="() => {
                    console.log(dataState)
                }" type="button" class="bg-orange-300 rounded-md p-2 font-semibold text-white w-full">Login</button>
                <button  type="button" class="bg-gray-50 hover:bg-gray-200 transition-all rounded-md p-2 font-light w-full flex items-center justify-center gap-x-3">
                    <UIcon name="i-devicon:google" />
                    Sign in with Google
                </button>
            </div>

            <div class="flex gap-x-5">
                <span>Don't have an account?</span>
                <span class="text-blue-400 hover:underline cursor-pointer">Sign Up</span>
            </div>

        </form>

    </div>
</template>

<style scoped>

</style>