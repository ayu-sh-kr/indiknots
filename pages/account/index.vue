<script setup lang="ts">

import Scaffold from "~/components/utils/Scaffold.vue";
import ProfileName from "~/components/account/ProfileName.vue";
import OrderPageRefer from "~/components/account/buttons/OrderPageRefer.vue";
import AccountPageRefer from "~/components/account/buttons/AccountPageRefer.vue";
import PaymentPageRefer from "~/components/account/buttons/PaymentPageRefer.vue";
import PersonalInformation from "~/components/account/forms/PersonalInformation.vue";
import EmailAddress from "~/components/account/forms/EmailAddress.vue";
import PhoneNumber from "~/components/account/forms/PhoneNumber.vue";
</script>

<template>
    <Scaffold class="grid lg:grid-cols-9 md:grid-cols-7 grid-cols-1 max-sm:place-items-center min-h-[90vh] max-w-[90rem] mx-auto gap-10 relative">
        <div class="md:col-span-2 col-span-1 text-nowrap w-full md:min-w-fit">
            <ProfileName/>

            <div class="mt-10 bg-white dark:bg-gray-800 rounded-lg shadow-lg font-adaptive border-adaptive overflow-hidden">
                <OrderPageRefer/>
                <AccountPageRefer/>
                <PaymentPageRefer/>
            </div>
        </div>
        <div class="lg:col-span-7 md:col-span-5 col-span-1">
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-xl border-adaptive px-6 py-2 space-y-10">
                <PersonalInformation/>
                <EmailAddress/>
                <PhoneNumber/>
            </div>
        </div>
    </Scaffold>
</template>

<style scoped>
</style>