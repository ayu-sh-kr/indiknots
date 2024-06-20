<script setup lang="ts">
const props = defineProps({
    text: {
        type: String,
        required: true
    }
})

const toast = useToast();

let copyText = async () => {
    await navigator.clipboard.writeText(props.text);
    toast.add({
        color: "emerald",
        title: "Success",
        description: "Text Copied to Clipboard",
        timeout: 5000,
        icon: "i-heroicons-check-circle"
    })
}

</script>

<template>

    <div class="flex justify-between w-fit items-center bg-gray-100 dark:bg-slate-800 dark:text-gray-100 rounded-lg px-2 text-gray-950">
        <span class="px-2 py-1">{{text}}</span>
        <UIcon name="i-mdi-content-copy" class="cursor-pointer active:scale-95" @click="copyText"/>
    </div>

</template>

<style scoped>

</style>