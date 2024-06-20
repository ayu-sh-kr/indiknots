<script setup lang="ts">


import {useDark} from "@vueuse/core";
import {useToggle} from "@vueuse/shared";

const isDark = useDark();
const toggleDark = useToggle(isDark);


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
    // console.log(`Current Pos: ${currentPos.value} scrollY: ${scrollY}`)
    headerVisible.value = currentPos.value > scrollY;
    setTimeout(() => {
        currentPos.value = scrollY;
    }, 2000)
}

const links: Link[] = [
    { label: 'Home', to: '/', icon: 'i-heroicons-home' },

    { label: 'Discover', to: '/discover', icon: 'i-material-symbols-add-location-alt-rounded' },

    { label: 'Services', to: '/service', icon: 'i-mdi-account-supervisor' },

    { label: 'Blogs', to: '/blog', icon: 'i-mdi-blogger' }
]
export interface Link {
    label: string,
    to: string,
    icon?: string,
    iconClass?:string
    hash?: string
}


const route = useRoute();
const activeHeader = computed(() => links.find(link => link.to === route.path) || {label: '', to: ''});

const emit = defineEmits(['side-nav'])
let sideNav = ref(true);
const toggleSideNav = useToggle(sideNav);

const handleSideNav = () => {
    emit('side-nav', toggleSideNav());
}



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

        <div class="cursor-pointer w-1/3 flex justify-center" @click="navigateTo('/')">
            <img :src="'/images/logo/logo-no-background.png'" alt="Indiknots Logo" class="h-20 w-20">
        </div>

        <div class="flex justify-end gap-x-4 items-center w-1/3">
            <button type="button"
                    class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0
                           font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700 dark:text-orange-400 hover:text-gray-900 dark:hover:text-orange-600
                           hover:bg-gray-100 dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400
                           inline-flex items-center"
                    aria-label="Switch to light mode"
                    @click="toggleDark()"
            >
            <span class="flex-shrink-0 h-5 w-5"
                  :class="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
                  aria-hidden="true">
            </span>
            </button>
            <button class="lg:hidden focus:outline-none cursor-pointer focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0
                            font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700 dark:text-orange-400 hover:text-gray-900 dark:hover:text-orange-600 hover:bg-gray-100
                            dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
                    @click="handleSideNav"
            >
                <UIcon name="i-mdi-menu" dynamic class="flex-shrink-0 h-5 w-5 font-semibold"/>
            </button>
            <button class="hidden focus:outline-none cursor-pointer focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0
                           font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700 dark:text-orange-400 hover:text-gray-900 dark:hover:text-orange-600
                           hover:bg-gray-100 dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400
                           lg:inline-flex items-center"
            >
                <UIcon name="i-material-symbols-logout-rounded" dynamic class="flex-shrink-0 h-5 w-5 font-semibold"/>
            </button>
        </div>
    </header>
    <div class="w-1/3 fixed top-16 right-0 z-30 lg:hidden" :hidden="sideNav">
        <UtilsSideNav/>
    </div>
</template>

<style scoped>


.animate-up {
    @apply transform -translate-y-full duration-700
}

.animate-down {
    @apply transform translate-y-0 duration-700
}

</style>