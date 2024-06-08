<script setup lang="ts">

import SectionHeader from "~/components/utils/SectionHeader.vue";
</script>

<template>
    <section class="py-10 px-2 sm:font-dm font-tahoma">
        <SectionHeader text1="ABOUT" text2="US"/>


        <div class="grid sm:grid-cols-2 grid-cols-1 place-content-center place-items-center py-16">
            <div class="flex justify-center items-center overflow-hidden md:py-10 sm:py-5">
                <img :src="'images/logo/logo-no-background.png'" alt="Indiknots Logo" class="h-80 w-80">
            </div>
            <div class="flex flex-col justify-center h-full items-center">
                <h2 class="text-orange-400 w-full text-center flex justify-center items-start">Indiknots <span class="text-black dark:text-white font-thin sm:text-sm font-aktive text-[0.5rem]">Designed With Elegance</span></h2>
                <div class="flex gap-x-5 gap-y-3 w-full justify-center mt-2 flex-wrap">
                    <UBadge label="B2B"
                            color="blue"
                            variant="subtle"
                    />
                    <UBadge
                        label="Customization"
                        color="yellow"
                        variant="subtle"
                    />
                    <UBadge
                        label="Shipping Globally"
                        color="red"
                        variant="subtle"
                    />
                    <UBadge
                        label="Shop Online"
                        color="purple"
                        variant="subtle"
                    />
                    <UBadge
                        label="Customer Support"
                        color="cyan"
                        variant="subtle"
                    />
                </div>
                <div class="mt-10 text-sm font-thin flex flex-col gap-y-5 font-aktive text-center text-gray-900 dark:text-gray-200 px-16">
                    <p>
                        Indiknots is a premier rug company that seamlessly blends traditional craftsmanship with modern
                        design. Our exquisite, handcrafted rugs enhance living spaces, tying together every element of
                        your home decor.
                    </p>
                    <p>
                        Whether you’re furnishing your living room, creating a captivating bedroom, or
                        adding vibrancy to a child’s room, our meticulously crafted rugs are the perfect choice. We
                        offer fast shipping, B2B services, customization options, and dedicated customer support.
                        Explore our stunning collection and experience the artistry of Indiknots.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>