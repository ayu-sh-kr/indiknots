<script setup lang="ts">

const items: StandFor[] = [
    {
        image: 'images/standfor/orange.png',
        label: 'Quality',
        description: 'We ensure quality in our rugs through the use of premium materials, secure shipping methods, advanced technology, and vibrant colors.'
    },

    {
        image: 'images/standfor/purple.png',
        label: 'Craftsmanship',
        description: 'Our business is dedicated to preserving and promoting traditional rug-making techniques.'
    }
];

export interface StandFor {
    image: string,
    label: string,
    description: string
}


</script>

<template>
    <section class="py-16 px-2">
        <div class="flex justify-center text-center items-center">
            <h3>WHAT WE <span class="text-orange-400">STAND FOR</span></h3>
        </div>

        <div class="flex justify-around flex-wrap items-center mt-10 gap-y-10 py-20">
            <div v-for="item in items" class="md:h-96 h-72 overflow-hidden relative group parent">
                <img :src="item.image" :alt="item.label" class="w-full h-full object-cover">
                <div class="absolute opacity-50 bottom-10 left-10 w-0 group-hover:w-[77.3%] md:group-hover:w-[83%] p-0.5 bg-white transition-all duration-700"></div>
                <div class="absolute opacity-50 bottom-10 left-10 h-0 group-hover:h-[71%] md:group-hover:h-[79%] p-0.5 bg-white transition-all duration-700"></div>
                <div class="absolute opacity-50 top-10 right-10 w-0 group-hover:w-[77.3%] md:group-hover:w-[83%] p-0.5 bg-white transition-all duration-700"></div>
                <div class="absolute opacity-50 top-10 right-10 h-0 group-hover:h-[71%] md:group-hover:h-[79%] p-0.5 bg-white transition-all duration-700"></div>
                <div class="absolute bottom-20 w-full text-2xl font-semibold flex justify-center">
                    <h3 class="hidden typer">{{item.label}}</h3>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

.parent:hover .typer {
    @apply block w-[15ch] whitespace-nowrap overflow-hidden text-center text-white;
    animation: typing 2s steps(15), linear step-end;
}

@keyframes typing {
    from {
        width: 0;
    }
}
</style>