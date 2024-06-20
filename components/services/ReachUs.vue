<script setup lang="ts">

import SectionHeader from "~/components/utils/SectionHeader.vue";
import CopyText from "~/components/utils/CopyText.vue";


const details: ReachingWay[] = [
    {
        icon: 'i-material-symbols-mark-chat-unread-outline',
        header: 'Live Chat',
        description: "Do you need help right away? Chat now with our experts. The chat is open during regular working hours, but you can leave a message if it is closed.",
        button: 'Chat Now',
        button_link: 'https://wa.me'
    },

    {
        icon: 'i-material-symbols-edit-calendar-outline-rounded',
        header: 'Book an Online Appointment',
        description: "You have something in your mind like a project or some idea that you would to discuss a bit? You can schedule a 15-minute online appointment with us directly from our <a href='https://www.instagram.com/indiknots_' target='_blank' class='text-pink-400'>Instagram</a> or fill the contact form.",
        button: 'Book Now',
        button_link: 'https://www.instagram.com/indiknots_'
    },

    {
        icon: 'i-material-symbols-mark-email-unread-outline-rounded',
        header: 'Email Us',
        description: "For general enquiries, price, sample or product related questions, you can drop us a message below. <br> <span class='font-semibold'>indiknot@gmail.com</span> <br> Our team will receive your email and will get in touch with you shortly.",
        button: 'Email Us',
        button_link: 'mailto:indiknots@gmail.com'
    },

    {
        icon: 'i-material-symbols-phone-in-talk-watchface-indicator-outline-sharp',
        header: 'Give us a Call',
        description: "If you need help with an online order, or if you prefer to talk to us, you can give us a call. <br> <span class='font-semibold'>9170748234</span> <br> Mon-Fri 9:30am-6:00pm IST",
        button: 'Call Us',
        button_link: 'tel:929-317-9471'
    }
]


export interface ReachingWay{
    icon: string,
    header: string,
    description: string
    button: string
    button_link?: string
}
</script>

<template>
    <section class="px-2 sm:py-10 py-4 font-dm" id="reach-us">
        <SectionHeader text2="TO US" text1="REACH OUT"/>

        <div class="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 py-10 mt-5">
            <div
                v-for="item in details" :key="item.header"
                class="flex flex-col items-center sm:px-5 px-3 py-4"
            >
                <UIcon :name="item.icon" class="h-8 w-8"/>
                <h3>{{item.header}}</h3>
                <div class="py-5 flex flex-col items-center justify-between h-48">
                    <p class="text-center text-sm text-gray-900 dark:text-gray-100 tracking-wide" v-html="item.description"></p>
                    <UButton :label="item.button" :to="item.button_link" target="_blank"  class="mt-2"/>
                </div>
            </div>
        </div>

    </section>
</template>

<style scoped>

</style>