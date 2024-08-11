<script setup lang="ts">

import DOMPurify from 'dompurify';

const props = defineProps({
    texts: {
        type: Array,
        required: true
    }
});


const paras = ref<string[]>(<string[]>props.texts);

</script>

<template>

    <div class="grid space-y-4 mt-3 text-lg">
        <p v-for="para in paras" v-html="para" :key="para"/>
    </div>

</template>

<style scoped>

</style>