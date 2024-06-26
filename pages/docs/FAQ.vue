<script setup lang="ts">

import SectionHeader from "~/components/utils/SectionHeader.vue";

const items: FAQ[] = [
    {
        label: 'HOW CAN I PURCHASE FROM THE INDIKNOTS?',
        content: "<p class=''>Our products are sold to both retail and trade clients online or through our showrooms, franchise locations and authorized agents.</p>" +
            "<p class='py-2'>If you have some design of your own and you want it to be produced as per your instruction you can reach out to us <a class='font-semibold' href='/service/#contact-us'>here</a></p>"
    },

    {
        label: 'DO YOU OFFER CUSTOM DESIGN SERVICES?',
        content: 'Our rug designs can be easily customized into different sizes, colors, materials and shapes; with the exception of some of our collections such as Farrow & Ball and The Endurance Collection that are limited to custom size. To change the size, color, material and shape; please add 15% for one technical change (i.e size only), or 20% for multiple changes (i.e size, color, material)'
    },

    {
        label: 'WHAT IS YOUR RETURN POLICY?',
        content: `
            <div class="flex flex-col gap-y-2">
                <p class="font-semibold">Online Purchased</p>
                <p>Product bought online can be returned withing the week of delivery after that return is not accepted. Refund will be initiated only upon the inspection of product returned.</p>
            </div>

            <div class="flex flex-col gap-y-2 mt-2">
                <p class="font-semibold">Return Procedure</p>
                <p>You should, must fill the return request for order from our web portal or <a class="font-semibold" href="/service/#contact-us">contact us</a> to resolve it. Once the return is accepted you have to ship the product to our given address and you have to bear the charges of the shipment.</p>
            </div>

            <p class="mt-3">For more information please refer to our <strong>return policy</strong>.</p>
        `
    },

    {
        label: 'HOW DO I BORROW A SAMPLE?',
        content: `
            <div class="flex flex-col gap-y-2">
                   <p>We provide sample for the <strong>Custom Designed</strong> product only for quality and design insurance.</p>
                   <p>Upon discussion and order confirmation we will ship your sample to your address.</p>
            </div>
        `
    }
]

export interface FAQ {
    label: string,
    content: string,
}

</script>

<template>
<section class="py-6 md:py-16 px-2 min-h-screen">
    <SectionHeader text1="Frequently Asked" text2="Questions"/>

    <div class="flex flex-col items-center py-10 w-full">
        <div class="w-full sm:w-2/3 relative">
            <UAccordion
                class="w-full"
                color="orange"
                variant="ghost"
                size="sm"
                :items="items"
            >
                <template #item="{item}">
                    <div class="font-dm" v-html="item.content"/>
                </template>
            </UAccordion>
        </div>
    </div>
</section>
</template>

<style scoped>

</style>