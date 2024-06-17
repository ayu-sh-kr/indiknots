<script setup lang="ts">

let items: Showcase[] = [
    {
        label: 'Living Room',
        image: 'images/showcase/living.png',
    },

    {
        label: 'Bedroom',
        image: 'images/showcase/bedroom.png',
    },
];

import { onMounted } from 'vue';

onMounted(() => {
    let container = document.querySelector('.container') as HTMLDivElement;
    document.querySelector('.slider')?.addEventListener('input', (event: any) => {
        // console.log(event.target.value)
        container?.style.setProperty('--position', `${event.target.value}%`)
    })
});

export interface Showcase {
    label: string,
    image: string
}

</script>

<template>
    <section class="py-10">
        <div class="flex justify-center items-center">
            <h3>SHOW <span class="text-orange-400">CASE</span></h3>
        </div>


        <div class="w-full h-full mt-10">
            <div class="flex justify-center items-center text-lg font-extralight font-dm px-10 text-center">
                <p>Showcasing rugs in different settings for visual comparison</p>
            </div>
            <main>
                <div class="container">
                    <div class="image-container">
                        <img :src="items[1].image" :alt="items[1].label"
                             class="image-before slider-image"
                        >
                        <img :src="items[0].image" :alt="items[0].label"
                             class="image-after slider-image"
                        >
                    </div>
                    <input type="range" min="0" max="100" value="50" class="slider"
                           aria-label="Percentage of Before Photo Shown"
                    >
                    <div class="slider-line" aria-hidden="true"></div>
                    <div class="slider-button" aria-hidden="true">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                        >
                            <rect width="256" height="256" fill="none"></rect>
                            <line
                                x1="128"
                                y1="40"
                                x2="128"
                                y2="216"
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></line>
                            <line
                                x1="96"
                                y1="128"
                                x2="16"
                                y2="128"
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></line>
                            <polyline
                                points="48 160 16 128 48 96"
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></polyline>
                            <line
                                x1="160"
                                y1="128"
                                x2="240"
                                y2="128"
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></line>
                            <polyline
                                points="208 96 240 128 208 160"
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></polyline>
                        </svg>
                    </div>
                </div>
            </main>
        </div>

    </section>
</template>

<style scoped>

img {
    display: block;
    max-width: 100%;
}

main{
    @apply grid place-items-center mt-3;
}

.container {
    @apply flex justify-center items-center relative overflow-hidden;
    --position: 50%;
}

.image-container {
    @apply relative overflow-hidden w-full lg:h-[110vh] md:h-[70vh] sm:h-[50vh] h-[40vh]
}

.slider-image{
    @apply w-full h-full object-cover object-left;
}

.image-before {
    @apply absolute inset-0;
    width: var(--position);
}

.slider {
    @apply absolute inset-0 cursor-pointer w-full h-full opacity-0;
}

.slider:focus-visible ~ .slider-button {
    outline: 5px solid black;
    outline-offset: 3px;
}

.slider-line {
    @apply absolute inset-0 w-[.2rem] h-full bg-white pointer-events-none left-[--position];
    transform: translateX(-50%);
}

.slider-button{
    position: absolute;
    background-color: white;
    color: black;
    padding: 0.5rem;
    border-radius: 100vw;
    display: grid;
    place-items: center;
    top: 50%;
    left: var(--position);
    transform: translate(-50%, -50%);
    pointer-events: none;
    box-shadow: 1px 1px 1px hsl(0, 50%, 2%, 0.5);
}

.image-container::before {
    content: 'BED ROOM';
    position: absolute;
    bottom: 10px;
    left: 0;
    @apply text-white font-dm p-2 text-sm font-semibold z-20;
}

.image-container::after {
    content: 'LIVING ROOM';
    position: absolute;
    bottom: 10px;
    right: 0;
    @apply text-white font-dm p-2 text-sm font-semibold z-20;
}

</style>