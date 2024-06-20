<script setup lang="ts">

const links: Link[] = [
    {label: 'Home', to: '/', icon: 'i-heroicons-home'},

    {label: 'Discover', to: '/discover', icon: 'i-material-symbols-add-location-alt-rounded'},

    {label: 'Services', to: '/service', icon: 'i-mdi-account-supervisor'},

    {label: 'Blogs', to: '/blog', icon: 'i-mdi-blogger'}
]

export interface Link {
    label: string,
    to: string,
    icon?: string,
    iconClass?: string
}

export interface IconType {
    icon: string,
    color?: string
}

</script>

<template>
    <UVerticalNavigation :links="links"
                         :ui="{
                               icon: {
                                   active: 'text-orange-400 dark:text-orange-600',
                                   inactive: 'text-gray-500 dark:text-gray-200 group-hover:text-gray-800 dark:group-hover:text-gray-50'
                               }

                         }"
    />
</template>

<style scoped>

</style>