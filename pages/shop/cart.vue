<script setup lang="ts">

import Scaffold from "~/components/utils/Scaffold.vue";
import SectionHeader from "~/components/utils/SectionHeader.vue";
import CartBody from "~/components/shop/cart/body/CartBody.vue";
</script>

<template>
    <Scaffold class="min-h-screen">
        <SectionHeader text2="Cart" text1=""/>

        <CartBody/>

    </Scaffold>
</template>

<style scoped>

</style>