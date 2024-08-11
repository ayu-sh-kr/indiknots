<script setup lang="ts">

import SectionHeader from "~/components/utils/SectionHeader.vue";
import StoryWrapper from "~/components/docs/story/StoryWrapper.vue";
import StoryParagraph from "~/components/docs/story/StoryParagraph.vue";
</script>

<template>
<section class="py-6 md:py-16 px-2 h-full font-dm">
    <SectionHeader text2="FOUNDER" text1="THE" />

    <div class="grid grid-cols-1 md:grid-cols-2 px-2 md:px-4 py-10">
        <div>

        </div>
        <div>
            <h2 class="text-gray-900 dark:text-gray-100"><span class="text-orange-400">Rani Devi</span> - A Tapestry of Old Soul And New Spirit !</h2>

            <StoryWrapper>
                <StoryParagraph :text="
                `   Born into a world of threads and dyes, <strong>Rani Devi's</strong> life has been an intricate tapestry woven with the rich hues of the rug industry.
                    Her grandfather, a master weaver, passed his passion onto her father, who in turn immersed Rani in a world of knots and patterns from a tender age.
                    Growing up, she was as comfortable amidst skeins of wool as she was in her own home.`
                "
                />

                <StoryParagraph :text="`
                    Marriage brought her into another family deeply entrenched in the same craft.
                    Her days were filled with the rhythmic cadence of looms, the vibrant colors of dyes, and the heady scent of wool.
                    It was a world she knew intimately, a world that pulsed through her veins.
                `"/>

                <StoryParagraph :text="`
                    Yet, despite her immersion, a spark of independence ignited within her.
                    A desire to create, to innovate, to leave her own mark on the industry.
                    Decades of observation, learning, and a deep-rooted passion culminated in the birth of Indiknots.
                `"/>

                <StoryParagraph :text="`
                    With her son by her side, <span class='font-medium'>Rani Devi</span> embarked on this new chapter.
                    <a href='/' class='text-orange-400'>Indiknots</a> was more than just a business; it was a dream realized, a testament to a lifetime dedicated to the art of rug-making.
                    The company was a celebration of tradition, infused with a contemporary spirit.
                `"/>

                <StoryParagraph :text="`
                    As the founder of a women-led enterprise in the heart of <strong>India’s rug-making hub, Bhadohi</strong>, <strong>Rani Devi</strong> is committed to <strong>empowering women</strong> and <strong>supporting local artisans.</strong>
                    <a href='/' class='text-orange-400'>Indiknots</a> is not just a brand; it’s a movement. It’s a promise to deliver exquisite, handcrafted rugs while creating opportunities for skilled artisans.
                `"/>

                <StoryParagraph :text="`
                    <strong>Rani Devi</strong> invites you to be a part of this journey. With each rug you purchase, you’re not just acquiring a piece of art,
                    but also supporting the dreams of countless women and artisans. Join us in celebrating the rich heritage of Indian rug-making,
                    reimagined for the modern world.
                `"/>

                <h3><i>Indiknots: Where Tradition Meets Innovation</i></h3>

                <StoryParagraph :text="`
                    <a href='/' class='text-orange-400'>Indiknots</a> was more than just a business; it was a labor of love. Rani spent countless hours selecting the finest wool,
                    collaborating with master weavers, and perfecting designs that blended tradition with contemporary aesthetics.
                    She was determined to create rugs that were not only visually stunning but also ethically produced.
                `"/>
            </StoryWrapper>

        </div>
    </div>
</section>
</template>

<style scoped>

</style>