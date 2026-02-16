<template>
    <div id="about-container">
        <a id="about" />
        <div class="section-title-container">
            <h2 class="section-title"># about me</h2>
        </div>
        <div id="about-presentation">
            <nuxt-img
                v-if="result?.AboutMe?.picture"
                id="about-picture"
                :src="result?.AboutMe?.picture?.url"
                :alt="result?.AboutMe?.picture?.alt"
                format="webp"
            ></nuxt-img>
            <div id="about-descriptions-container">
                <div id="about-opener">{{ result?.AboutMe?.opener }}</div>
                <div id="about-description">
                    {{ result?.AboutMe?.description }}
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#about-container {
    display: flex;
    flex-direction: column;

    padding-top: 100px;
    gap: 10px;
}

#about-presentation {
    display: flex;

    gap: 150px;
    padding-right: 150px;
}

#about-picture {
    width: 350px;
    object-fit: cover;

    border-radius: 10px;
}

#about-descriptions-container {
    display: flex;
    flex-direction: column;

    gap: 50px;
}

#about-opener {
    font-weight: 500;
    font-size: 40px;
}

#about-description {
    font-weight: 400;
    font-size: 40px;
}

/* lg */
@media only screen and (max-width: 1024px) {
    #about-presentation {
        flex-direction: column;

        gap: 50px;
        padding-right: unset;
    }
}

/* md */
@media only screen and (max-width: 768px) {
    #about-presentation {
        gap: 25px;
    }

    #about-opener,
    #about-description {
        font-size: 20px;
    }
}
</style>

<script setup lang="ts">
const { result } = defineProps(["result"]);
</script>
