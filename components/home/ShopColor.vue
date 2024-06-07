<script setup lang="ts">

const items: ColorRug[] = [
    {
        image: 'images/shopcolors/beige.png',
        color: 'BEIGE'
    },

    {
        image: 'images/shopcolors/black.png',
        color: 'BLACK'
    },

    {
        image: 'images/shopcolors/blue.png',
        color: 'BLUE'
    },

    {
        image: 'images/shopcolors/brown.png',
        color: 'BROWN'
    },

    {
        image: 'images/shopcolors/gray.png',
        color: 'GRAY'
    },

    {
        image: 'images/shopcolors/multi.png',
        color: 'MULTI'
    },

    {
        image: 'images/shopcolors/pink.png',
        color: 'PINK'
    },

    {
        image: 'images/shopcolors/red.png',
        color: 'RED'
    },

    {
        image: 'images/shopcolors/white.png',
        color: 'WHITE'
    },

    {
        image: 'images/shopcolors/green.png',
        color: 'GREEN'
    },
];



export interface ColorRug {
    image: string,
    color: string
}
</script>

<template>
    <section class="px-2 py-24 mt-10">
        <div class="flex justify-center items-center">
            <h3>SHOP BY <span class="text-orange-400">COLOR</span></h3>
        </div>

        <div class="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5 mt-16">
            <div class="col-span-1 flex flex-col items-center justify-center gap-4" v-for="(item, index) in items" :key="index">
                <div class="h-48 overflow-hidden object-cover bg-white/80 rounded-lg">
                    <img :src="item.image" :alt="item.color" class="w-full h-full">
                </div>
                <UButton :color="item.color.toLocaleLowerCase()" :label="item.color" variant="soft"/>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>