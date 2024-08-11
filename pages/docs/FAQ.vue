<script setup lang="ts">

import SectionHeader from "~/components/utils/SectionHeader.vue";

const items: FAQ[] = [
    {
        label: 'How can I purchase from Indiknots?',
        content: "<p class=''>Our products are sold to both retail and trade clients online or through our showrooms, franchise locations and authorized agents.</p>" +
            "<p class='py-2'>If you have some design of your own and you want it to be produced as per your instruction you can reach out to us <a class='font-semibold' href='/service/#contact-us'>here</a></p>"
    },

    {
        label: 'Do you offer custom design services?',
        content: 'Our rug designs can be easily customized into different sizes, colors, materials and shapes; with the exception of some of our collections such as Farrow & Ball and The Endurance Collection that are limited to custom size. To change the size, color, material and shape; please add 15% for one technical change (i.e size only), or 20% for multiple changes (i.e size, color, material)'
    },

    {
        label: 'What is your return policy?',
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
        label: 'How do I borrow a sample?',
        content: `
            <div class="flex flex-col gap-y-2">
                   <p>We provide sample for the <strong>Custom Designed</strong> product only for quality and design insurance.</p>
                   <p>Upon discussion and order confirmation we will ship your sample to your address.</p>
            </div>
        `
    },

    {
        label: 'Until what point can I cancel my purchase?',
        content: `
        <p>You can cancel your order and get a full refund before the product is shipped. But once the product has started being made or has already been sent, you can't cancel the order.</p>
        `
    },

    {
        label: 'Does this policy apply to the customers outside the country(INDIA)?',
        content: `
        <p>Unfortunately, our 15-day easy return policy is only for customers who live in India right now. If you're buying from outside India, our warranty policy will apply to you. </p>
        `
    },

    {
        label: 'How much does the shipping cost?',
        content: `
        <p>Enjoy free shipping on all rugs ordered from our website within India. If you're ordering from another country, please call us at +91 9170748234 for shipping details. </p>
        `
    },

    {
        label: "What's the turnaround time for custom made rugs?",
        content: `
        <p>The time it takes to make a custom rug depends on its size and how it's made. For a hand-tufted rug, it'll take at least a month. But if you want a hand-knotted rug, it could take three months or even longer, especially if it's large or has lots of detail. </p>
        `
    },

    {
        label: 'Do you take order through whatsapp?',
        content: `
        <p>Yes, it is possible. You may contact us on WhatsApp at +91 9170748234.</p>
        `
    },

    {
        label: 'Do you send an email when my order is placed?',
        content: `
        <p>Once you place your order, we'll send you a confirmation email and WhatsApp message. When your order ships, we’ll send another email with tracking information and a receipt of invoice.</p>
        `
    },

    {
        label: 'Why choose Indiknots rugs?',
        content: `
        <p>Indiknots rugs are handcrafted by skilled artisans who pay close attention to every detail. This makes them not only beautiful but also incredibly durable. Our rugs can handle even the busiest households.</p>
        `
    },

    {
        label: "Is there anything else you would like to ask or discuss or you still have some questions?",
        content: `
        <p>No problem at all! If you have any questions or need help with anything, feel free to reach out to our friendly customer service team. They're happy to assist you! You can call them at <span class='font-semibold'>+91 9170748234</span> or send an email to
        <span class='font-semibold'>indiknots1@gmail.com</span>
        .</p>
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

    <div class="grid max-w-7xl md:mx-auto py-10 w-full">
        <UAccordion
            class="w-full text-left"
            color="gray"
            variant="ghost"
            size="lg"
            :items="items"
        >
            <template #item="{item}">
                <div class="font-dm px-3 text-sm md:text-base dark:text-gray-200 text-gray-800" v-html="item.content"/>
            </template>
        </UAccordion>
    </div>
</section>
</template>

<style scoped>

</style>