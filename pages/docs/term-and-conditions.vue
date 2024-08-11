<script setup lang="ts">

import SectionHeader from "~/components/utils/SectionHeader.vue";
import Term from "~/components/docs/terms/Term.vue";
import TermHeader from "~/components/docs/terms/TermHeader.vue";
import TermBody from "~/components/docs/terms/TermBody.vue";
</script>

<template>
    <section class="py-6 md:py-16 px-2 min-h-screen font-dm">
        <SectionHeader text2="Term & Conditions" text1=""/>

        <div class="grid w-full md:max-w-7xl md:mx-auto py-10 text-gray-700 dark:text-gray-200 px-2 space-y-10">
            <p class="text-lg">
                These Terms and Conditions of Trading (‘Agreement’) apply to all online sales between
                The Indiknots Limited and the Customer (‘you/your’) in relation to all sales of goods and services.
            </p>

            <Term>
                <TermHeader text="Welcome to the Indiknots website!"/>
                <TermBody
                    :texts="[`By using our website <a href='/' class='text-orange-400'>Indiknots</a>, you agree to these terms and conditions. These terms form a legal agreement between you and Indiknots. If you don\'t agree to these terms, please don\'t use our website.`,
                        `This notice explains what we do with any personal information you provide when using Indiknots.com. We take your privacy seriously and will only use your information according to our Privacy Notice and relevant laws.
                        If you're not comfortable with how we use your information, please don't use our website.`
                    ]"
                />
            </Term>

            <Term>
                <TermHeader text="By using our website, you agree to the following:"/>
                <TermBody :texts="[
                    `<span class='font-medium'>•You must be of legal age to use this website.</span> If you're under the legal age, you need your parent or guardian's permission.`,
                    `<span class='font-medium'>•No illegal activity:</span> You can't use our website for anything illegal or harmful.`,
                    `<span class='font-medium'>•No harmful code: </span> You can't send viruses or other harmful software through our website.`,
                    `<span class='font-medium'>•Breaking the rules:  </span> If you break any of these rules, we can stop you from using our website.`,
                ]"
                />
            </Term>

            <Term>
                <TermHeader text="The information on this website is for general reference only."/>
                <TermBody :texts="[
                    `We can't guarantee that everything on this website is completely accurate, up-to-date, or complete. Don't rely solely on this information to make important decisions. Always check other sources to confirm things.
                     Some of the information on this website is historical and might be outdated. We update our website from time to time, but we don't promise to keep everything current.
                    `,
                    `You're responsible for checking this website for changes.`
                ]"
                />
            </Term>

            <Term>
                <TermHeader text="Price and Service Changes" />
                <TermBody :texts="[
                    `We reserve the right to change our prices without letting you know beforehand.`,
                    `We can also change or stop offering our products or services without giving you any notice.`,
                    `If we do make changes, we won't be responsible for any problems this causes.`
                ]"
                />
            </Term>

            <Term>
                <TermHeader text="What you see is what we have (mostly):"/>
                <TermBody :texts="[
                    `•\tSome items are only available online and might sell out.`,
                    `•\tWe try our best to show you accurate product colors, but computer screens can vary.`,
                    `•\tWe can limit orders or stop selling items anytime, for any reason.`,
                    `•\tProduct details and prices can change without notice.`,
                    `•\tWe don't promise that our products or services will be perfect, or that everything will work exactly as you expect.`
                ]"
                />
            </Term>

            <Term>
                <TermHeader text="7-Days Return Window"/>
                <TermBody :texts="['We want to ensure you are entirely happy with your purchase. Our returns policy is 7 days upon receipt for a full refund or exchange - provided that the item is returned complete and in original condition. The Indiknots will cover the cost of return shipping for non-sale items, but original delivery cost will not be refunded.',
                        'Return your rug within 7 days of receiving it.'
                ]"
                />
            </Term>

            <SectionHeader text2="Accuracy of Billing and Account Information" text1=""/>

            <Term>
                <TermHeader text="We reserve the right to:"/>
                <ul class="mt-3 grid space-y-1 px-8" style="list-style-type: disc">
                    <li class='font-semibold'>Limit or cancel orders.</li>
                    <li class='font-semibold'>Refuse any order.</li>
                </ul>
                <TermBody :texts="[
                    `We might limit orders per person, household, or order. This includes orders with the same billing or shipping address. If we cancel or change your order, we’ll try to contact you. We can also limit orders from resellers or distributors.`
                ]"
                />
            </Term>

            <Term>
                <TermHeader text="You agree to:"/>
                <ul class="mt-3 grid space-y-1 px-8" style="list-style-type: disc">
                    <li class='font-semibold'>Give us correct and up-to-date billing information.</li>
                    <li class='font-semibold'>Keep your account information current.</li>
                </ul>
            </Term>

            <Term>
                <TermHeader text="Prohibited Uses"/>
                <TermBody :texts="[
                    'You agree not to use our website for any illegal or harmful purposes. This includes:'
                ]"
                />
                <ul class="mt-3 grid space-y-1 px-4 sm:px-8 font-semibold w-full" style="list-style-type: disc">
                    <li class=''>Breaking any laws</li>
                    <li class=''>Violating our or others' intellectual property rights</li>
                    <li class=''>Harassing, threatening, or disrespecting others</li>
                    <li class=''>Sharing false information</li>
                    <li class=''>Spreading viruses or harmful software</li>
                    <li class=''>Collecting personal information without permission</li>
                    <li class=''>Spamming or trying to hack our website</li>
                </ul>
                <p class="mt-3 text-lg">If you break any of these rules, we can stop you from using our website</p>
            </Term>

            <SectionHeader text2="Disclaimer and Limitation of Liability" text1=""/>

            <Term>
                <TermHeader text="We make no promises about our service."/>
                <TermBody :texts="[
                    `We can't guarantee that our website will always work perfectly or without interruptions. We might even have to shut down our website sometimes. You use our website at your own risk.`
                ]"
                />
            </Term>

            <Term>
                <TermHeader text="We're not responsible for any problems."/>
                <TermBody :texts="[
                    `We're not liable for any damages, losses, or problems caused by using our website or our products. This includes things like lost money, data, or time. Some places have laws that limit how much a company can be responsible for, so our liability might be limited in those places.`
                ]"
                />
            </Term>

            <Term>
                <TermHeader text="This is the whole deal."/>
                <TermBody :texts="[
                    `If we don't enforce a part of this agreement, it doesn't mean we give up the right to do so later.`,
                    `These terms are the only agreement between us. Any other agreements we had before don't matter anymore.`,
                    `If there's any confusion about what these terms mean, we decide what they mean.`
                ]"
                />
            </Term>

            <Term>
                <TermHeader text="Governing Law"/>
                <TermBody :texts="[
                    `<span class='font-medium'>Any agreements or privacy policies linked to this one will be handled and understood according to Indian law. If there's a legal dispute, it will be settled in the courts of Bhadohi, India.</span>`,
                ]"
                />
            </Term>

            <Term>
                <TermHeader text="Changes to These Terms"/>
                <TermBody :texts="[
                    `<span class='font-medium'>You can always find the latest version of these terms on our website. We can change these terms whenever we want. If we do, we’ll post the changes on our website. If you keep using our website after we make changes, it means you agree to them.</span>`,
                ]"
                />
            </Term>
        </div>

    </section>
</template>

<style scoped>

</style>