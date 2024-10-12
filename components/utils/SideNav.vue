<script setup lang="ts">

import LoginSideBtn from "~/components/account/security/LoginSideBtn.vue";

const links: Link[] = [
    {label: 'Home', to: '/', icon: 'i-heroicons-home'},

    {label: 'Shop', to: '/shop', icon: 'i-material-symbols-add-location-alt-rounded'},

    {label: 'Services', to: '/service', icon: 'i-mdi-account-supervisor'},

    {label: 'Blogs', to: '/blog', icon: 'i-mdi-blogger'}
]

export interface Link {
    label: string,
    to: string,
    icon?: string,
    iconClass?: string
}

</script>

<template>
    <UPopover>
        <button class="lg:hidden focus:outline-none cursor-pointer focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0
                            font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700 dark:text-orange-400 hover:text-gray-900 dark:hover:text-orange-600 hover:bg-gray-100
                            dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
        >
            <UIcon name="i-mdi-menu" dynamic class="flex-shrink-0 h-5 w-5 font-semibold"/>
        </button>

        <template #panel>
            <div class="flex flex-col w-56 gap-y-1.5">
                <NuxtLink v-for="link in links" :to="link.to"
                          class="transition-all py-2 px-3 flex justify-start gap-x-3 items-center cursor-pointer dark:hover:bg-gray-800
                                hover:bg-gray-50 text-slate-900 hover:text-orange-400 dark:text-gray-100 dark:hover:text-orange-400"
                >
                    <UIcon :name="link.icon || 'Unavailable'"/>
                    <h4>{{link.label}}</h4>
                </NuxtLink>
                <span class="w-full border border-gray-300"></span>
                <LoginSideBtn/>
            </div>
        </template>
    </UPopover>
</template>

<style scoped>

</style>