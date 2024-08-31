<script setup lang="ts">

import Scaffold from "~/components/utils/Scaffold.vue";
import {useDark} from "@vueuse/core";
import Index from "~/pages/shop/index.vue";

definePageMeta({
    layout: false
});

const isDark = useDark();
isDark.value = false;

</script>

<template>
    <Scaffold class="grid place-items-center h-screen bg-slate-200 w-full">

        <div class="grid md:grid-cols-2 grid-cols-1 bg-white shadow-2xl rounded-2xl p-2 sm:p-4 md:p-6 lg:p-8 border border-gray-100 gap-5 min-w-[340px] sm:min-w-[580px] md:min-w-[720px] lg:w-[1080px]">

            <div class="flex flex-col items-center bg-orange-300 rounded-xl max-sm:h-16 max-md:h-32 overflow-hidden">
                <div>
                    <img src="/images/login/login.png" alt="Login Rug">
                </div>

                <h2 class="text-white font-semibold">Be Trendy</h2>

                <p class="my-5 text-white text-sm font-light w-96 text-center text-wrap">Buy the best rugs, made by generational experienced weavers</p>

            </div>

            <div class="w-full py-2 sm:py-4 md:py-8 lg:py-12 px-2 md:px-3 lg:px-5 flex flex-col space-y-2 md:space-y-3 lg:space-y-5 text-slate-600">

                <h1 class="font-light">Hello, Again</h1>

                <p class="text-lg">We are happy to have you back</p>

                <form class="w-full flex flex-col pt-4 md:pt-6 lg:pt-10 gap-y-3">
                    <div class=" space-y-4 md:space-y-6 lg:space-y-10">

                        <div class="w-full">
                            <input type="text" placeholder="Email Address" class="text-lg border border-gray-200 focus:outline-none focus:ring-4 focus:ring-orange-200 p-3 w-full h-full rounded-md">
                        </div>

                        <div class="w-full">
                            <input type="password" placeholder="Password" class="text-lg border border-gray-200 focus:outline-none focus:ring-4 focus:ring-orange-200 p-3 w-full h-full rounded-md">
                        </div>

                    </div>

                    <div class="flex justify-between items-center">
                        <span class="flex items-center gap-x-2"><input type="checkbox">Remember me</span>
                        <span class="text-blue-400 hover:underline cursor-pointer">Forgot Password</span>
                    </div>

                    <div class="space-y-5 py-8 w-full">
                        <button  type="button" class="bg-orange-300 rounded-md p-2 font-semibold text-white w-full">Login</button>
                        <button  type="button" class="bg-gray-50 hover:bg-gray-200 transition-all rounded-md p-2 font-light w-full flex items-center justify-center gap-x-3">
                            <UIcon name="i-devicon:google" />
                            Sign in with Google
                        </button>
                    </div>

                </form>

            </div>

        </div>
    </Scaffold>
</template>

<style scoped>

</style>