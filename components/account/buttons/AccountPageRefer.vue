<script setup lang="ts">

import {getActivePageInfo} from "~/utils/GeneralUtils";

const links: Nav[] = [
    {
        label: 'Personal Information',
        to: '/account/profile'
    },

    {
        label: 'Manage Addresses',
        to: '/account/manage-addresses'
    }
];

const route = useRoute();
const activeHeader = computed(() => getActivePageInfo<Nav>(route, links));
</script>

<template>
    <div class="border-t border-adaptive">
        <div class="flex justify-between items-center py-2 px-3 gap-x-5">
            <UIcon name="i-material-symbols:person-4-rounded" class="sidebar-icon" color="orange"
                   variant="soft"
            />
            <h4 class="flex-1 sidebar-text text-left">Account Settings</h4>
        </div>
        <div>
            <NuxtLink :to="link.to" :key="link.to" v-for="link in links">
                <div class="sidebar-content sidebar-hover" :class="{'text-orange-400 dark:text-orange-500' : activeHeader.label === link.label}">
                    <p>{{ link.label }}</p>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>

<style scoped>

</style>