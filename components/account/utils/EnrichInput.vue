<script setup lang="ts">
const props = defineProps({
    modelValue: {
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
    },
    type: {
        type: String,
        required: false,
        default: 'text'
    },

    isError: {
        type: Boolean,
        required: false,
        default: false
    }
})

const inputRef = ref<HTMLInputElement | null>(null);

const focusInput = () => {
  if(inputRef.value) {
      inputRef.value.focus();
  }
}

const emit = defineEmits(['update:modelValue'])

const updateValue = (event: Event) => {
    const target = event.target as HTMLInputElement;
    emit('update:modelValue', target.value);
};

</script>

<template>

    <div class="px-6 border border-gray-400/20 dark:border-gray-100/20 font-adaptive flex flex-col justify-start rounded-sm lg:col-span-2"
         :class="`${disabled ? 'bg-gray-100 dark:bg-gray-700 py-3' : 'bg-white dark:bg-gray-800 py-1'} ${isError ? 'border-red-400' : ''}`"
         @click="focusInput"
    >
        <span class="text-xs text-orange-400 dark:text-orange-500" :hidden="disabled">{{ label }}</span>
        <input ref="inputRef"
               :type="type"
               :value="modelValue"
               :disabled="disabled"
               class="disabled:bg-gray-100 bg-white dark:disabled:bg-gray-700 dark:bg-gray-800 outline-none"
              @input="updateValue"
        >
    </div>

</template>

<style scoped>

</style>