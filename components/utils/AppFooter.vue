<script setup lang="ts">


import type {Link} from "~/components/utils/AppHeader.vue";

const menu: Link[] = [
    {
        label: 'Home',
        to: '/',
    },

    {
        label: 'Discover',
        to: '/discover',
    },

    {
        label: 'Services',
        to: '/services',
    },

    {
        label: 'Blog',
        to: '/blog',
    },
];


const policy: Link[] = [
    {
        label: 'Delivery and Return',
        to: '/'
    },

    {
        label: 'Frequently Asked Question',
        to: '/'
    },

    {
        label: 'Privacy and Cookie Policy',
        to: '/'
    },

    {
        label: 'Terms and Conditions',
        to: '/'
    }
]


const knots: Link[] = [
    {
        label: 'Contact Us',
        to: '/'
    },

    {
        label: 'Consult An Expert',
        to: '/'
    },

    {
        label: 'Our Story',
        to: '/'
    },

    {
        label: 'Meet The Founders',
        to: '/'
    }
]

</script>

<template>
<section class="px-2 py-10 bg-black dark:bg-white text-gray-100 dark:text-gray-950">
    <div class="grid grid-cols-2 md:grid-cols-5 place-content-center place-items-center gap-y-5">
        <div class="col-span-2 px-3 flex flex-col justify-between gap-y-10">
            <div>
                <h4 class="text-gray-200 dark:text-gray-900 font-thin font-aktive sm:font-dm text-sm tracking-wide">ABOUT INDIKNOTS</h4>
                <p class="mt-5 text-0.75 font-aktive sm:font-dm">
                    Rugs Handmade With Love. Fine Craftsmanship Honed Over 40 Years.
                </p>
            </div>
        </div>
        <div>
            <h4 class="text-gray-200 dark:text-gray-900 font-thin font-aktive sm:font-dm text-sm tracking-wide">
                MAIN MENU
            </h4>

            <ul class="flex flex-col gap-y-3 mt-3">
                <li v-for="item in menu" class="text-0.75">
                    <NuxtLink :to="item.to" class="hover:text-orange-400">
                        {{item.label}}
                    </NuxtLink>
                </li>
            </ul>
        </div>
        <div>
            <h4 class="text-gray-200 dark:text-gray-900 font-thin font-aktive sm:font-dm text-sm tracking-wide">
                STORE POLICY
            </h4>

            <ul class="flex flex-col gap-y-3 mt-3">
                <li v-for="item in policy" class="text-0.75">
                    <NuxtLink :to="item.to" class="hover:text-orange-400">
                        {{item.label}}
                    </NuxtLink>
                </li>
            </ul>
        </div>
        <div>
            <h4 class="text-gray-200 dark:text-gray-900 font-thin font-aktive sm:font-dm text-sm tracking-wide">
                INDI KNOTS
            </h4>

            <ul class="flex flex-col gap-y-3 mt-3">
                <li v-for="item in knots" class="text-0.75">
                    <NuxtLink :to="item.to" class="hover:text-orange-400">
                        {{item.label}}
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
    <div class="flex gap-x-3 mt-5">
        <NuxtLink :to="'https://instagram.com'" target="_blank" class="block">
            <UIcon name="i-mdi-instagram" dynamic class="h-6 w-6 dark:text-gray-700 dark:hover:text-gray-900 text-gray-400 hover:text-gray-200"/>
        </NuxtLink>

        <NuxtLink :to="'https://facebook.com'" target="_blank" class="block">
            <UIcon name="i-mdi-facebook" dynamic class="h-6 w-6 dark:text-gray-700 dark:hover:text-gray-900 text-gray-400 hover:text-gray-200"/>
        </NuxtLink>

        <NuxtLink :to="'https://linkedin.com/in/ayu-sh-kr'" target="_blank" class="block">
            <UIcon name="i-mdi-linkedin" dynamic class="h-6 w-6 dark:text-gray-700 dark:hover:text-gray-900 text-gray-400 hover:text-gray-200"/>
        </NuxtLink>

        <NuxtLink :to="'https://whatsapp.com'" target="_blank" class="block">
            <UIcon name="i-mdi-whatsapp" dynamic class="h-6 w-6 dark:text-gray-700 dark:hover:text-gray-900 text-gray-400 hover:text-gray-200"/>
        </NuxtLink>
    </div>
</section>
</template>

<style scoped>

</style>