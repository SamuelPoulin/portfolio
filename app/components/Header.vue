<template>
    <div class="flex items-center justify-between w-full h-24">
        <nuxt-link href="/" class="font-bold text-xl no-underline"
            >SP</nuxt-link
        >
        <div class="hidden items-center gap-2.5 select-none lg:flex">
            <div class="flex items-center text-3xl">
                {{ result?.HeaderAlert?.emojiLeft }}
            </div>
            <div class="font-normal text-xl">
                {{ result?.HeaderAlert?.alert }}
            </div>
            <div class="flex items-center text-3xl">
                {{ result?.HeaderAlert?.emojiRight }}
            </div>
        </div>
        <div class="flex gap-2.5 sm:gap-6 lg:gap-12 text-xl">
            <NuxtLink to="#projects">projects</NuxtLink>
            <NuxtLink to="#about">about</NuxtLink>
            <NuxtLink to="#skills">skills</NuxtLink>
        </div>
        <nuxt-link
            class="hidden text-xl sm:inline"
            href="mailto:samuel-poulin@outlook.com"
            >contact me</nuxt-link
        >
    </div>
</template>

<script lang="ts" setup>
const { data: result } = await useAsyncGql({
    operation: "headerAlert",
});
</script>
