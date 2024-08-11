<script setup lang="ts">
import NoData from '~/assets/svg/no-data.svg';
</script>

<template>
<section class="grid sm:grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto place-items-center overflow-hidden">
    <div class="text-center py-10 space-y-5 font-semibold text-gray-700 dark:text-gray-300">
        <h4 class="text-5xl md:text-6xl lg:text-7xl">Oops!</h4>
        <h1 class="text-orange-400">No Content At The Moment</h1>
    </div>
    <NoData style="height: 100%; width: 100%" :title="'No-Data svg by freepik'"/>
</section>
</template>

<style scoped>

</style>