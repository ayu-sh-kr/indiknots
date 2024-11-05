<script setup lang="ts">

import SideNav from "~/components/utils/SideNav.vue";
import HeaderCartAction from "~/components/shop/cart/header/HeaderCartAction.vue";
import AppLogo from "~/components/utils/application/AppLogo.vue";
import AppDarkMode from "~/components/utils/application/AppDarkMode.vue";
import {getActivePageInfo} from "~/utils/GeneralUtils";

let isScrolled = ref(false);
let currentPos = ref<number>(0);
let headerVisible = ref(true);

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

function handleScroll() {
    isScrolled.value = window.scrollY > 50;
    headerVisible.value = currentPos.value > scrollY;
    setTimeout(() => {
        currentPos.value = scrollY;
    }, 2000)
}

const links: Links[] = [
    { label: 'Home', to: '/', icon: 'i-heroicons-home' },

    { label: 'Shop', to: '/shop', icon: 'i-material-symbols-add-location-alt-rounded' },

    { label: 'Services', to: '/service', icon: 'i-mdi-account-supervisor' },

    { label: 'Blogs', to: '/blog', icon: 'i-mdi-blogger' }
];


export interface Links extends Nav{
    label: string,
    to: string,
    icon?: string,
    iconClass?:string
    hash?: string
}


const route = useRoute();
const activeHeader = computed(() => getActivePageInfo<Links>(route, links));

</script>

<template>
    <header class="sticky top-0 z-30 border-gray-200 py-3 px-4
    w-full hover:bg-white transition-all duration-300 font-dm
    flex justify-between mx-auto items-center
    dark:hover:bg-[#121212]
"
            :class="{'bg-transparent backdrop-blur shadow-none hover:shadow-md animate-up': isScrolled, 'bg-white dark:bg-black': !isScrolled, 'animate-down': headerVisible}"
    >

        <ul class="hidden lg:flex justify-start items-center gap-x-8 text-sm font-semibold text-gray-950 dark:text-gray-200 mt-2 w-1/3">
            <li v-for="link in links"
                class="hover:text-orange-400 group"
                :class="{'text-orange-400': activeHeader.label === link.label}"
            >
                <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
                <div class="group-hover:w-full transition-all duration-500 p-0.5 group-hover:bg-orange-400 w-0"></div>
            </li>
        </ul>

        <div class="cursor-pointer w-1/3 flex justify-center">
            <AppLogo/>
        </div>

        <div class="flex justify-end gap-x-4 items-center w-1/3">

            <AppDarkMode/>

            <HeaderCartAction/>

<!--            <UButton icon="i-material-symbols-logout-rounded" variant="ghost"/>-->
            <UButton class="hidden lg:flex" to="/login" icon="i-material-symbols-login-rounded" variant="ghost"/>

            <SideNav/>

        </div>
    </header>
</template>

<style scoped>


.animate-up {
    @apply transform -translate-y-full duration-700
}

.animate-down {
    @apply transform translate-y-0 duration-700
}

</style>