<template>
    <LandingSection />
    <ProjectsSection />
    <AboutSection />
    <SkillsSection />
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
</script>
