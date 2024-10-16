<script setup lang="ts">

import OrderPageRefer from "~/components/account/buttons/OrderPageRefer.vue";
import AccountPageRefer from "~/components/account/buttons/AccountPageRefer.vue";
import PaymentPageRefer from "~/components/account/buttons/PaymentPageRefer.vue";
import ProfileName from "~/components/account/ProfileName.vue";
</script>

<template>
    <ProfileName/>

    <div class="mt-10 bg-white dark:bg-gray-800 rounded-lg shadow-lg font-adaptive border-adaptive overflow-hidden">
        <OrderPageRefer/>
        <AccountPageRefer/>
        <PaymentPageRefer/>
    </div>
</template>

<style scoped>

</style>