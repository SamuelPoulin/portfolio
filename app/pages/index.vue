<template>
    <LandingSection :result="result" />
    <ProjectsSection :result="result" />
    <AboutSection :result="result" />
    <SkillsSection :result="result" />
</template>

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

const { data: result } = await useAsyncGql({
    operation: "landingPage",
});
</script>
