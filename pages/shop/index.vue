<script setup lang="ts">

import NoContent from "~/components/utils/NoContent.vue";
import Scaffold from "~/components/utils/Scaffold.vue";
import SectionHeader from "~/components/utils/SectionHeader.vue";
import ProductCard from "~/components/shop/card/ProductCard.vue";
import PCardImage from "~/components/shop/card/PCardImage.vue";

useHead({
    title: 'Indiknots Shop',
});

useSeoMeta({
    ogTitle: 'Shop on Indiknots',
    ogDescription: '',
})


</script>

<template>
    <Scaffold>
        <SectionHeader text2="Products" text1="Shop Our" />


        <div class="grid grid-cols-4">
            <ProductCard class="flex flex-col items-center justify-center space-y-3">
                <PCardImage url="https://d16n7e76tyykgs.cloudfront.net/fit-in/300x400/prod-images/Headshot/Large/RCT_LES-2579-0001.jpg"/>
                <div class="text-center">
                    <h4 class="text-xl font-medium text-gray-700 dark:text-gray-100">Anarkali</h4>
                    <p class="font-extralight text-gray-600 dark:text-gray-300 text-sm">Hand Knotted- Wool and Bamboo Silk</p>
                    <p class="font-light text-gray-800/95 dark:text-gray-200/95 mt-2">120 x 180 cm</p>
                    <p class="font-semibold text-lg">$2,739</p>
                </div>
            </ProductCard>
        </div>


    </Scaffold>
    <NoContent/>
</template>

<style scoped>

</style>