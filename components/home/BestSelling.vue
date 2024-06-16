<script setup lang="ts">

const items: BestSelling[] = [
    {
        label: 'SMOKE',
        provider: 'IndiKnots',
        price: 6438,
        shipping: 'FAST SHIPPING',
        image: 'images/bestselling/smoke.png',
    },

    {
        label: 'COCO',
        provider: 'IndiKnots',
        price: 5968,
        shipping: 'FAST SHIPPING',
        image: 'images/bestselling/coco.png'
    },

    {
        label: 'MESSA',
        provider: 'IndiKnots',
        price: 8914,
        shipping: 'FAST SHIPPING',
        image: 'images/bestselling/messa.png'
    },

    {
        label: 'TETRAS',
        provider: 'IndiKnots',
        price: 2598,
        shipping: 'FAST SHIPPING',
        image: 'images/bestselling/tetras.png'
    },

    {
        label: 'ANEMONE',
        provider: 'IndiKnots',
        price: 6458,
        shipping: 'FAST SHIPPING',
        image: 'images/bestselling/anemone.png'
    },

    {
        label: 'SHOAL',
        provider: 'IndiKnots',
        price: 6978,
        shipping: 'FAST SHIPPING',
        image: 'images/bestselling/shoal.png'
    },

]

export interface BestSelling {
    label: string,
    provider: string,
    price: number
    shipping: string,
    image: string
}
</script>

<template>
<section class="py-24 px-2 mt-20">
    <div class="flex justify-center items-center">
        <h3>DISCOVER OUR <span class="text-orange-400">BESTSELLING</span> RUGS</h3>
    </div>

    <div class="w-full grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5 mt-16 align-middle">
        <div v-for="(item, index) in items" :key="index"
             class="col-span-1"
             v-motion-slide-visible-top
        >
            <img :src="item.image" :alt="item.label" />
            <div class="flex flex-col items-center mt-2 rounded-none">
                <h3 class="font-extralight">{{item.label}}</h3>
                <h4 class="text-lg font-extralight">{{item.provider}}</h4>
                <div class="flex flex-col gap-2 items-center justify-center">
                    <p class="text-sm cursor-pointer text-slate-900 dark:text-slate-100 font-semibold hover:text-orange-400 dark:hover:text-orange-400">FROM: ${{item.price}}</p>
                    <UBadge :label="item.shipping" color="indigo" variant="outline"
                            :ui="{
                                rounded: 'rounded-none'
                            }"
                    />
                </div>
            </div>
        </div>
    </div>

</section>
</template>

<style scoped>

</style>