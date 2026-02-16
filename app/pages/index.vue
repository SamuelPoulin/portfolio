<template>
    <LandingSection :result="result" />
    <ProjectsSection :result="result" />
    <AboutSection :result="result" />
    <SkillsSection :result="result" />
</template>

<style>
.section-title-container {
    display: flex;
    align-items: center;

    height: 100px;
}

.section-title {
    margin: 0;

    user-select: none;
    font-weight: 500;
    font-size: 40px;
}

/* md */
@media only screen and (max-width: 768px) {
    .section-title-container {
        height: 75px;
    }

    .section-title {
        font-size: 20px;
    }
}

/* sm */
@media only screen and (max-width: 640px) {
    .section-title-container {
        height: 50px;
    }

    .section-title {
        font-size: 20px;
    }
}
</style>

<script lang="ts" setup>
useHead({
    title: "Samuel Poulin",
    meta: [
        {
            name: "description",
            content: "Software Engineering graduate based in Montréal.",
        },
    ],
    htmlAttrs: {
        lang: "en",
    },
});

const showBagel = ref(false);

const { data: result } = await useAsyncGql({
    operation: "landingPage",
});
</script>
