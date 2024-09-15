<script setup lang="ts">

let items = ref<RugCategory[]>();

onMounted( async () => {
    const response = await fetch('data/category.json');
    items.value = await response.json() as RugCategory[];
})


export interface RugCategory {
    label:string,
    image:string,
    availability?:boolean
    slugs?:string[]
}

</script>

<template>
<div class="mt-20 min-h-screen">
    <div class="flex justify-center items-center mt-5">
        <h3>SHOP BY <span class="text-orange-400">CATEGORY</span></h3>
    </div>

    <div class="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 p-2 gap-x-8 gap-y-4 px-3 md:px-10 mt-10">
        <div v-for="(item, index) in items" :key="index"
             class="cursor-pointer col-span-1"
             v-motion-pop-visible
        >
            <img :src="item.image" :alt="item.label" />
            <div class="flex justify-center items-center mt-5">
                <h3 class="lg:text-xl md:text-lg text-[1.5rem] text-slate-900 contrast-150 font-dm dark:text-white">{{item.label}}</h3>
            </div>
        </div>
    </div>


</div>
</template>

<style scoped>

</style>