<script setup lang="ts">

import SectionHeader from "~/components/utils/SectionHeader.vue";
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
                :items="[
                {
                    label: 'HOW CAN I PURCHASE FROM THE INDIKNOTS?',
                    content: 'You can buy directly from our online store or contact us to order directly'
                }
            ]"
            />
        </div>
    </div>
</section>
</template>

<style scoped>

</style>