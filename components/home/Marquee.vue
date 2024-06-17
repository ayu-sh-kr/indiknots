<script setup lang="ts">

const props = defineProps({
    text: {
        type: String,
        required: true
    }
})

</script>

<template>
    <section class="min-h-44 p-2 w-screen flex items-center overflow-x-hidden">
        <div class="marquee-container">
            <div class="marquee-content">
                {{ text }}
            </div>
        </div>
    </section>
</template>

<style scoped>
.marquee-container {
    @apply w-full overflow-hidden p-2;
}

.marquee-content {
    @apply text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold font-dm text-nowrap text-center flex items-center py-2
    w-fit bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-purple-400 to-pink-400;
    animation: marquee 20s linear infinite;
}

@keyframes marquee {
    0% {
        transform: translateX(100%);
    }

    100% {
        transform: translateX(-100%);
    }
}
</style>