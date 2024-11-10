<script setup lang="ts">

import {OrderModal} from "~/modals/order.modal";
import OrderPreview from "~/components/account/order/view/OrderPreview.vue";

definePageMeta({
    layout: 'account'
});

const orders = ref<OrderModal[]>([
    OrderModal.builder().fromOrder(
        {
            id: 1,
            invoice: '',
            status: [
                {
                    value: 'Order Confirmed',
                    message: 'Your order have been accepted by seller.',
                    date: new Date()
                }
            ],
            address: {
                id: 1,
                name: "Ayush Kumar Jaiswal",
                phone: {
                    code: "91",
                    number: "8931007054"
                },
                zipcode: "221201",
                locality: "Bhora Bajar",
                area: "Near Bhora Primary School, Bhora, Aneai",
                city: "Varanasi",
                state: "Uttar Pradesh",
                country: "India",
                addressType: "Home",
                referer: "",
                landmark: "",
                alternatePhone: {
                    code: "",
                    number: ""
                }
            },

            action: 'Cancellable',
            unit: {
                price: 5000,
                quantity: 10,
                product: {
                    id: 1,
                    name: 'Cocktail Indigo',
                    description: 'A pinch of russian cocktail and british indigo mixed with indigenous white silk',
                    color: 'Indigo',
                    image: '',
                    price: {
                        price: 500,
                        sale_percentage: 0,
                        size: {
                            unit: 'ft',
                            width: 10,
                            length: 10
                        },
                        price_type: 'CUSTOMER'
                    }
                }
            }
        }
    ).build(),

    OrderModal.builder().fromOrder(
        {
            id: 2,
            invoice: '',
            status: [
                {
                    value: 'Delivered',
                    message: 'Your order have been delivered to given address.',
                    date: new Date()
                }
            ],
            address: {
                id: 1,
                name: "Ayush Kumar Jaiswal",
                phone: {
                    code: "91",
                    number: "8931007054"
                },
                zipcode: "221201",
                locality: "Bhora Bajar",
                area: "Near Bhora Primary School, Bhora, Aneai",
                city: "Varanasi",
                state: "Uttar Pradesh",
                country: "India",
                addressType: "Home",
                referer: "",
                landmark: "",
                alternatePhone: {
                    code: "",
                    number: ""
                }
            },

            action: 'Replaceable',
            unit: {
                price: 5000,
                quantity: 10,
                product: {
                    id: 1,
                    name: 'Rumified Algae',
                    description: 'A combination of color from indigenous rum and natural algae',
                    color: 'Emerald',
                    image: '',
                    price: {
                        price: 500,
                        sale_percentage: 0,
                        size: {
                            unit: 'ft',
                            width: 10,
                            length: 10
                        },
                        price_type: 'CUSTOMER'
                    }
                }
            }
        }
    ).build()
]);

</script>

<template>
    <div class="space-y-5">
        <OrderPreview v-for="order in orders" :order="order"/>
    </div>
</template>

<style scoped>

</style>