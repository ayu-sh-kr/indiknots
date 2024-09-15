<script setup lang="ts">

</script>

<template>
    <section class="w-full lg:h-[88dvh] overflow-hidden relative font-tahoma">
        <img src="https://www.rugberry.in/cdn/shop/files/22_11_14_LVNG_132_1_617b65a0-e00a-40ee-95e2-20732d2c5acd.jpg?v=1701541531&width=1800"
             alt="Shop Hero Image"
             class="w-full h-full"
        >
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white tracking-wider space-y-2 md:space-y-4 lg:space-y-5 w-fit">
                <p class="text-xs md:text-sm font-almostLight contrast-150 text-nowrap">FINE QUALITY | EXCLUSIVE</p>
                <h1 class="w-fit text-nowrap">Timeless Moder Rugs</h1>
                <div>
                    <NuxtLink to="/shop">
                        <button class="button-padding bg-orange-400">SHOP NOW</button>
                    </NuxtLink>
                </div>
        </div>
    </section>
</template>

<style scoped>

.button-padding {
    @apply px-3 py-1 md:px-4 md:py-1.5 lg:px-5 lg:py-2
}

</style>