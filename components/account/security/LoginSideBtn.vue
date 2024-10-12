<script setup lang="ts">

const loggedIn = ref(false);
</script>

<template>
    <NuxtLink v-if="loggedIn" :to="'/logout'"
              class="transition-all py-2 px-3 flex justify-start gap-x-3 items-center cursor-pointer dark:hover:bg-gray-800
                                hover:bg-gray-50 text-slate-900 hover:text-orange-400 dark:text-gray-100 dark:hover:text-orange-400"
    >
        <UIcon :name="'i-material-symbols:logout-rounded' || 'Unavailable'"/>
        <h4>Login</h4>
    </NuxtLink>
    <NuxtLink v-else :to="'/login'"
              class="transition-all py-2 px-3 flex justify-start gap-x-3 items-center cursor-pointer dark:hover:bg-gray-800
                                hover:bg-gray-50 text-slate-900 hover:text-orange-400 dark:text-gray-100 dark:hover:text-orange-400"
    >
        <UIcon :name="'i-material-symbols:login-rounded' || 'Unavailable'"/>
        <h4>Login</h4>
    </NuxtLink>
</template>

<style scoped>

</style>