<script setup lang="ts">

import HeroSection from "~/components/home/HeroSection.vue";
import ShopCategory from "~/components/home/ShopCategory.vue";
import RugPurpose from "~/components/home/RugPurpose.vue";
import BestSelling from "~/components/home/BestSelling.vue";
import ShopColor from "~/components/home/ShopColor.vue";
import Showcase from "~/components/home/Showcase.vue";
import StandFor from "~/components/home/StandFor.vue";
import AboutUs from "~/components/home/AboutUs.vue";
import Marquee from "~/components/home/Marquee.vue";


useHead({
    title: 'Indiknots Home'
})

</script>

<template>
    <HeroSection/>
    <ShopCategory/>
    <RugPurpose/>
    <BestSelling/>
    <ShopColor/>
    <Showcase/>
    <StandFor/>
    <Marquee text="Indiknots: An Online Store for Traditional, Handmade Rugs and Carpets."/>
    <AboutUs/>
</template>

<style scoped>
</style>