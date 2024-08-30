<script setup lang="ts">

import NoContent from "~/components/utils/NoContent.vue";
import Scaffold from "~/components/utils/Scaffold.vue";
import SectionHeader from "~/components/utils/SectionHeader.vue";
import Product from "~/components/shop/Product.vue";

useHead({
    title: 'Indiknots Shop'
});

const products: Product[] = [
    {
        "id": "2",
        "name": "Ramble",
        "img": "https://d16n7e76tyykgs.cloudfront.net/fit-in/300x400/prod-images/Headshot/Large/RCT_LES-2560-0001.jpg",
        "description": "Composed in an earthy terracotta hue that emanates a warm, soft energy. Ramble is inspired by the meandering paths in New York’s Central Park and has been crafted in a fusion of silk and wool to accentuate the sense of momentum.",
        "category": "TRADITIONAL",
        "size": [
            {
                "length": 6,
                "width": 4,
                "unit": "ft"
            },
            {
                "length": 10,
                "width": 8,
                "unit": "ft"
            },
            {
                "length": 15,
                "width": 12,
                "unit": "ft"
            }
        ],
        "color": "Beige",
        "shape": "RECTANGLE",
        "material": "SILK",
        "technique": "HAND_KNOTTED",
        "price": [
            {
                "size": {
                    "length": 6,
                    "width": 4,
                    "unit": "ft"
                },
                "price": 299.99,
                "sale_percentage": 10,
                "price_type": "CUSTOMER"
            },

            {
                "size": {
                    "length": 10,
                    "width": 8,
                    "unit": "ft"
                },
                "price": 799.99,
                "sale_percentage": 40,
                "price_type": "CUSTOMER"
            },
            {
                "size": {
                    "length": 15,
                    "width": 12,
                    "unit": "ft"
                },
                "price": 1099.99,
                "sale_percentage": 40,
                "price_type": "CUSTOMER"
            }
        ],
        "sale": true,
        "stock": "AVAILABLE",
        "animal_friendly": true
    },

    {
        "id": "1",
        "name": "Reverie Blonde",
        "img": "https://d16n7e76tyykgs.cloudfront.net/fit-in/300x400/prod-images/Headshot/Large/RCT_NMS-15-OD-0001.jpg",
        "description": "Inspired by Henri Matisse’s series of cut-outs, Rêverie Blonde presents organic shapes that interweave across the surface. The motif features a warm palette and is inset against the neutral Tibetan wool base, creating a collage effect.",
        "category": "MODERN",
        "size": [
            {
                "length": 6,
                "width": 4,
                "unit": "ft"
            },
            {
                "length": 10,
                "width": 8,
                "unit": "ft"
            }
        ],
        "color": "Green",
        "shape": "RECTANGLE",
        "material": "WOOL",
        "technique": "HAND_KNOTTED",
        "price": [
            {
                "size": {
                    "length": 6,
                    "width": 4,
                    "unit": "ft"
                },
                "price": 299.99,
                "sale_percentage": 10,
                "price_type": "CUSTOMER"
            },

            {
                "size": {
                    "length": 10,
                    "width": 8,
                    "unit": "ft"
                },
                "price": 799.99,
                "sale_percentage": 40,
                "price_type": "CUSTOMER"
            }
        ],
        "sale": true,
        "stock": "AVAILABLE",
        "animal_friendly": true
    },

    {
        "id": "1",
        "name": "Phoolon Ki Janjeer",
        "img": "https://d16n7e76tyykgs.cloudfront.net/fit-in/300x400/prod-images/Headshot/Large/RD_LES-2394-0001.jpg",
        "description": "Inspired by Henri Matisse’s series of cut-outs, Rêverie Blonde presents organic shapes that interweave across the surface. The motif features a warm palette and is inset against the neutral Tibetan wool base, creating a collage effect.",
        "category": "DESIGNER",
        "size": [
            {
                "length": 6,
                "width": 0,
                "unit": "ft"
            },
            {
                "length": 10,
                "width": 0,
                "unit": "ft"
            }
        ],
        "color": "Green",
        "shape": "ROUNDED",
        "material": "BOMBOO_SILK",
        "technique": "HAND_KNOTTED",
        "price": [
            {
                "size": {
                    "length": 6,
                    "width": 0,
                    "unit": "ft"
                },
                "price": 129.99,
                "sale_percentage": 10,
                "price_type": "CUSTOMER"
            },

            {
                "size": {
                    "length": 10,
                    "width": 0,
                    "unit": "ft"
                },
                "price": 499.99,
                "sale_percentage": 40,
                "price_type": "CUSTOMER"
            }
        ],
        "sale": true,
        "stock": "AVAILABLE",
        "animal_friendly": true
    },
]

</script>

<template>
    <Scaffold>
        <SectionHeader text2="Products" text1="Shop Our" />


        <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-sm:place-items-center mt-10">
            <Product v-for="product in products" :key="product.id" :product="product" />
        </div>


    </Scaffold>
    <NoContent/>
</template>

<style scoped>

</style>