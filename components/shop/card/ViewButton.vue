<script setup lang="ts">

</script>

<template>
    <button class="relative group px-3 py-1 flex items-center transition-all active:scale-95 rounded-md overflow-hidden">
        <span class="absolute -z-10 left-0 w-0 h-full group-hover:w-full dark:bg-orange-500 bg-orange-400 transition-all duration-300"></span>
        <slot/>
        <span class="absolute -z-10 right-0 w-0 h-full group-hover:w-full dark:bg-orange-500 bg-orange-400 transition-all duration-300"></span>
    </button>
</template>

<style scoped>

.background {
    @apply relative -z-10 w-full h-full;
}

.background::before,
.background::after {
    @apply absolute dark:bg-orange-400 bg-orange-500 p-2;
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    transition: width 1s ease;
    left: 50%;
    top: 50%;
}

button:hover > .background::before,
button:hover > .background::after {
    @apply px-20 py-5;
    width: 60%;
}


</style>