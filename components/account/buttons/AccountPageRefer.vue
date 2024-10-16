<script setup lang="ts">

</script>

<template>
    <NuxtLink :to="'/account/profile'">
        <div class="border-t border-adaptive">
            <div class="flex justify-between items-center py-2 px-3 gap-x-5">
                <UIcon name="i-material-symbols:person-4-rounded" class="sidebar-icon" color="orange" variant="soft"></UIcon>
                <h4 class="flex-1 sidebar-text text-left">Account Settings</h4>
            </div>
            <div>
                <div class="sidebar-content sidebar-hover">
                    <p>Personal Information</p>
                </div>
                <div class="sidebar-content sidebar-hover">
                    <p>Manage Addresses</p>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>

<style scoped>

</style>