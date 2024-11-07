<script setup lang="ts">

import {useAccountStore} from "~/stores/account.store";
import type {AddressModal} from "~/modals/address.modal";


const addresses = ref<AddressModal[]>([])
const accountStore = useAccountStore();

onMounted(() => {
    addresses.value = accountStore.addresses;
    console.log(addresses)
});

watch((accountStore.addresses), (newValue) => {
    addresses.value = newValue;
})

</script>

<template>
    <div>
        <div v-for="(address, index) in addresses" :key="index" class="border-adaptive px-3 py-2 space-y-3 text-sm">
            <div class="flex justify-between items-center">
                <UBadge :label="address.addressType" color="gray" variant="soft"/>
                <UPopover>
                    <UButton icon="i-mdi:dots-vertical" color="gray" variant="ghost"/>

                    <template #panel>
                        <div class="flex flex-col w-24">
                            <UButton label="Edit" color="gray" variant="ghost" icon="i-material-symbols:edit" />
                            <UButton label="Delete" color="gray" variant="ghost" icon="i-material-symbols:delete"/>
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
    </div>
</template>

<style scoped>

</style>