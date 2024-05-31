<script setup lang="ts">

const carousel = ref();

const items: Purpose[] = [
    {
        link: "",
        description: "Enhance your living space with stunning handcrafted rugs that tie everything together. Elevate your home decor using meticulously crafted rugs.",
        label: "Living Room",
        image: "images/purpose/living.png"
    },

    {
        link: "",
        description: "Create living artwork in your bedrooms using our exquisite, artisanal stunners. Transform your bedrooms into captivating spaces with our unique, handcrafted rugs.",
        label: "Bedroom",
        image: "images/purpose/bedroom.png"
    },

    {
        link: "",
        description: "Energize your home with vibrant rugs that match your child’s exuberance. Add a pop of color to your living space with lively rugs.",
        label: "Kids Room",
        image: "images/purpose/kids.png"
    },


];

let currentPage = ref(0);

onMounted(() => {
    setInterval(() => {
        if(!carousel.value) return

        if (carousel.value.page === carousel.value.pages) {
            currentPage.value = 0
            return carousel.value.select(0)
        }

        currentPage.value = carousel.value.page
        carousel.value.next()
    }, 5000)
})

export interface Purpose{
    image:string,
    link:string,
    description:string,
    label:string
}
</script>

<template>
    <section class="mt-20 font-dm">
        <div class="flex justify-center items-center mt-5">
            <h3>SHOP FOR <span class="text-orange-400">PURPOSE</span></h3>
        </div>
        <UCarousel ref="carousel"
                   v-slot="{ item }"
                   :items="items"
                   :ui="{
                        item: 'basis-full lg:h-[60vh] h-fit mt-20 overflow-hidden py-2'
                   }"

        >
            <div class="flex flex-wrap-reverse gap-y-10 lg:flex-row h-full w-full items-center justify-center dark:text-white text-black">
                <div class="lg:w-1/2 w-full flex flex-col items-center justify-center gap-3 lg:h-full h-1/3">
                    <h2 class="font-almostLight">{{item.label}}</h2>
                    <p class="text-sm lg:text-[16px] lg:leading-relaxed font-almostLight text-center text-slate-800 dark:text-slate-100 w-4/5 text-wrap tracking-wide lg:text-left">{{item.description}}</p>
                    <div>
                        <a href="#" class="mt-2 bg-orange-400 dark:bg-transparent dark:underline text-white dark:text-orange-400 font-semibold px-4 py-2 text-xl tracking-wide underline-offset-4">Shop</a>
                    </div>
                </div>
                <div class="lg:w-1/2 overflow-hidden object-cover h-2/3 lg:h-full flex items-center justify-center bg-black">
                    <img :src="item.image" :alt="item.label" class="w-full h-full" :class="{'popular-animate': currentPage === items.indexOf(item)}">
                </div>
            </div>
        </UCarousel>
    </section>
</template>

<style scoped>


.popular-animate {
    animation: animate-popular 5s linear;
}

@keyframes animate-popular {
    0% {
        opacity: 0;
        scale: 1.05;
    }

    50% {
        scale: 1.02;
    }

    100% {
        opacity: 1;
        scale: 1;
    }
}
</style>