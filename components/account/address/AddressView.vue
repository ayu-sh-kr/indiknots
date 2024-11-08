<script setup lang="ts">

import AddressForm from "~/components/account/forms/AddressForm.vue";
import type {AddressModal} from "~/modals/address.modal";
import {useAccountStore} from "~/stores/account.store";

const props = defineProps({
    address: {
        type: Object as PropType<AddressModal>,
        required: true
    }
});

const accountStore = useAccountStore();
const formOpen = ref(false)

const addressForm = reactive<Address>(
    props.address
)

const close = () => {
    formOpen.value = !formOpen.value;
}

const submit = () => {
    close();
}

const remove = () => {
    accountStore.deleteAddress(props.address.id);
}

</script>

<template>
    <div v-if="!formOpen" class="border-adaptive px-3 py-2 space-y-3 text-sm">
        <div class="flex justify-between items-center">
            <UBadge :label="address.addressType" color="gray" variant="soft"/>
            <UPopover>
                <UButton icon="i-mdi:dots-vertical" color="gray" variant="ghost"/>

                <template #panel>
                    <div class="flex flex-col w-24">
                        <UButton @click="formOpen = !formOpen" label="Edit" color="gray" variant="ghost" icon="i-material-symbols:edit" />
                        <UButton @click="remove" label="Delete" color="gray" variant="ghost" icon="i-material-symbols:delete"/>
                    </div>
                </template>
            </UPopover>
        </div>

        <div class="flex justify-start items-center gap-x-5 font-semibold">
            <p>{{address.name}}</p>
            <p>{{address.phone.number}}</p>
        </div>

        <div class="space-y-1">
            <p>{{address.area}}</p>
            <p>{{address.getAdministrativeAddress()}}</p>
        </div>
    </div>

    <AddressForm v-else :submit="submit" :address="addressForm" @close-form="close"/>
</template>

<style scoped>

</style>