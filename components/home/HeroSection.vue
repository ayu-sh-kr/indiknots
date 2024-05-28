<script setup lang="ts">

let items: CarouselItem[] = [
    {
        link: 'images/carousel/img.png',
        label: 'New In Season'
    },

    {
        link: 'images/carousel/img_1.png',
        label: 'New In Season'
    },

    {
        link: 'images/carousel/img_2.png',
        label: 'New In Season'
    },

    {
        link: 'images/carousel/img_3.png',
        label: 'New In Season'
    },


]

const carouselRef = ref()
let currentPage = ref(0);

onMounted(() => {
    setInterval(() => {
        if (!carouselRef.value) return

        if (carouselRef.value.page === carouselRef.value.pages) {
            currentPage.value = 0;
            return carouselRef.value.select(0)
        }

        currentPage.value = carouselRef.value.page;

        carouselRef.value.next()
    }, 5000)
})


export interface CarouselItem{
    link: string,
    label: string
}
</script>

<template>

    <UCarousel
        ref="carouselRef"
        v-slot="{ item }"
        :items="items"
        :ui="{
            item: 'basis-full lg:h-[90vh] md:h-[70vh] sm:h-[60vh] h-[50vh]'
        }"
        class="w-full"
        indicators
    >
        <div class="w-full h-full object-cover overflow-hidden bg-black relative">
            <img :src="item.link" :key="items.indexOf(item)" alt="" class="w-full h-full" draggable="false" :class="{'hero-animate': currentPage === items.indexOf(item)}">
            <div class="font-dm flex justify-center items-center font-semibold absolute bottom-20 w-full z-20 text-white" :class="{'text-animate': currentPage === items.indexOf(item)}">
                <h1>{{item.label}}</h1>
            </div>
        </div>
    </UCarousel>

</template>

<style scoped>

.hero-animate{
    animation: animate-scale-in 3s linear;
}

.text-animate {
    animation: text-transform-in 3s linear;
}


@keyframes animate-scale-in {
    0% {
        opacity: 0.05;
        scale: 1.05;
    }

    20% {
        opacity: 0.1;
    }

    100% {
        opacity: 1;
        scale: 1;
    }
}

@keyframes text-transform-in {
    0% {
        opacity: 0;
        transform: translateY(100%);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

</style>