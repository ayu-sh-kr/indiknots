<script setup lang="ts">

import SectionHeader from "~/components/utils/SectionHeader.vue";
import Term from "~/components/docs/terms/Term.vue";
import TermHeader from "~/components/docs/terms/TermHeader.vue";
import TermBody from "~/components/docs/terms/TermBody.vue";
</script>

<template>
<section class="py-6 md:py-16 px-2 min-h-screen font-dm">
    <SectionHeader text2="Delivery And Return Policy" text1=""/>

    <div class="grid max-w-7xl mx-auto py-10 text-gray-700 px-10 space-y-10">

        <Term>
            <TermHeader text="7 Days Money Back Policy"/>
            <TermBody :texts="[
                `If you're not completely happy with your purchase, you can return it within 7 days of getting it. We’ll check it over to make sure it’s in good condition,
                and if it is, we’ll give you your money back. we will initiate the refund process and you will receive the amount within 5-7 days`
            ]"
            />
        </Term>

        <Term>
            <TermHeader text="Do I have to pay to send the item back to Indiknots?"/>
            <TermBody :texts="[
                `You don't have to pay to send the item back! We can arrange for someone to pick it up from
                 you at a time that works for you. Or, if you prefer, you can send it back yourself. Just make sure to ship it within two days of asking to return it.`
            ]"
            />
        </Term>
        <Term>
            <TermHeader text="How do I return a rug to Indiknots within 7 days of buying it?"/>
            <TermBody :texts="[
                `<span class='font-semibold px-4'>1. Hassle-Free Returns: </span>Easily request a return within 7 days of receiving your rug. Contact us by phone or email.`,
                `<span class='font-semibold px-4'>2. Free Pickup: </span>We'll arrange a convenient pick-up time for your return within 3-4 business days.`,
                `<span class='font-semibold px-4'>3. Self-Ship Option: </span>Use the original packaging or request new packaging if needed.`,
                `<span class='font-semibold px-4'>4. Pack it Up: </span>Easily request a return within 7 days of receiving your rug. Contact us by phone or email.`,
                `<span class='font-semibold px-4'>5. Track Your Return: </span>Get a pickup receipt or tracking number for your records.`,
                `<span class='font-semibold px-4'>6. Quality Inspection: </span>Once received, your rug will undergo a quick inspection.`,
                `<span class='font-semibold px-4'>7. Choose Your Refund: </span>Opt for store credit or get your money back to your original payment method.`,
            ]"
            />
        </Term>
    </div>
</section>
</template>

<style scoped>

</style>