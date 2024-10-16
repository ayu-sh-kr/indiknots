<script setup lang="ts">
const props = defineProps({
    value: {
        type: String,
        required: true
    },
    disabled: {
        type: Boolean,
        required: true
    },
    label: {
        type: String,
        required: true
    }
})

const inputRef = ref<HTMLInputElement | null>(null);

const focusInput = () => {
  if(inputRef.value) {
      inputRef.value.focus();
  }
}

</script>

<template>

    <div class="px-6 border border-gray-400/20 dark:border-gray-100/20 font-adaptive flex flex-col justify-start rounded-sm"
         :class="`${disabled ? 'bg-gray-200 dark:bg-gray-700 py-3' : 'bg-white dark:bg-gray-800 py-1'}`"
         @click="focusInput"
    >
        <span class="text-xs text-orange-400 dark:text-orange-500" :hidden="disabled">{{ label }}</span>
        <input ref="inputRef" type="text" :value="value" :disabled="disabled" class="disabled:bg-gray-200 bg-white dark:disabled:bg-gray-700 dark:bg-gray-800 outline-none">
    </div>

</template>

<style scoped>

</style>