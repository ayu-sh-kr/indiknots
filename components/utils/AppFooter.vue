<script setup lang="ts">


import type {Link} from "~/components/utils/AppHeader.vue";

const menu: Link[] = [
    {
        label: 'Home',
        to: '/',
    },

    {
        label: 'Shop',
        to: '/shop',
    },

    {
        label: 'Services',
        to: '/service',
    },

    {
        label: 'Blog',
        to: '/blog',
    },
];


const policy: Link[] = [
    {
        label: 'Delivery and Return',
        to: '/docs/return-policy'
    },

    {
        label: 'Frequently Asked Question',
        to: '/docs/faq'
    },

    {
        label: 'Privacy and Cookie Policy',
        to: '/'
    },

    {
        label: 'Terms and Conditions',
        to: '/docs/term-and-conditions'
    }
]


const knots: Link[] = [
    {
        label: 'Contact Us',
        to: '/service',
        hash: '#contact-form'
    },

    {
        label: 'Consult An Expert',
        to: '/service',
        hash: '#reach-us'
    },

    {
        label: 'Our Story',
        to: '/docs/ourstory'
    },

    {
        label: 'Meet The Founders',
        to: '/'
    }
]

</script>

<template>
<footer class="px-2 py-10 bg-black dark:bg-white text-gray-100 dark:text-gray-950">
    <div class="grid grid-cols-2 md:grid-cols-5 sm:place-content-center sm:place-items-center gap-y-5">
        <div class="col-span-2 sm:px-3 flex flex-col justify-between gap-y-10">
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

            <ul class="footer-links">
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

            <ul class="footer-links">
                <li v-for="item in policy" class="text-0.75">
                    <NuxtLink :to="item.to" class="hover:text-orange-400">
                        {{item.label}}
                    </NuxtLink>
                </li>
            </ul>
        </div>
        <div>
            <h4 class="text-gray-200 dark:text-gray-900 font-thin font-aktive sm:font-dm text-sm tracking-wide">
                INDIKNOTS
            </h4>

            <ul class="footer-links">
                <li v-for="item in knots" class="text-0.75">
                    <NuxtLink :to="{path: item.to, hash: item.hash}"
                              class="hover:text-orange-400">
                        {{item.label}}
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
    <div class="flex gap-x-5 mt-8 justify-center">
        <NuxtLink :to="'https://www.instagram.com/indiknots_?igsh=a2FkZmhraGFpdW4='" target="_blank" class="block">
            <UIcon name="i-mdi-instagram" dynamic class="h-6 w-6 dark:text-gray-700 dark:hover:text-gray-900 text-gray-400 hover:text-gray-200"/>
        </NuxtLink>

        <NuxtLink :to="'https://facebook.com'" target="_blank" class="block">
            <UIcon name="i-mdi-facebook" dynamic class="h-6 w-6 font-aktive sm:font-dm dark:text-gray-700 dark:hover:text-gray-900 text-gray-400 hover:text-gray-200"/>
        </NuxtLink>

        <NuxtLink :to="'https://linkedin.com/in/indiknots'" target="_blank" class="block">
            <UIcon name="i-mdi-linkedin" dynamic class="h-6 w-6 font-aktive sm:font-dm dark:text-gray-700 dark:hover:text-gray-900 text-gray-400 hover:text-gray-200"/>
        </NuxtLink>

        <NuxtLink :to="'https://whatsapp.com'" target="_blank" class="block">
            <UIcon name="i-mdi-whatsapp" dynamic class="h-6 w-6 font-aktive sm:font-dm dark:text-gray-700 dark:hover:text-gray-900 text-gray-400 hover:text-gray-200"/>
        </NuxtLink>
    </div>
</footer>
</template>

<style scoped>
.footer-links{
    @apply flex flex-col gap-y-3 mt-3 font-aktive sm:font-dm;
}
</style>