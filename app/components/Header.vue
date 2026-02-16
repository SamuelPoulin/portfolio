<template>
    <div class="flex items-center justify-between w-full h-24">
        <NuxtLink href="/" class="font-bold text-xl no-underline">SP</NuxtLink>
        <div class="hidden items-center gap-2.5 select-none lg:flex">
            <div class="flex items-center text-3xl">
                {{ result?.HeaderAlert?.emojiLeft }}
            </div>
            <div class="text-xl">
                {{ result?.HeaderAlert?.alert }}
            </div>
            <div class="flex items-center text-3xl">
                {{ result?.HeaderAlert?.emojiRight }}
            </div>
        </div>
        <div class="flex gap-2.5 sm:gap-6 lg:gap-12 text-xl">
            <NuxtLink class="underline" to="#projects">projects</NuxtLink>
            <NuxtLink class="underline" to="#about">about</NuxtLink>
            <NuxtLink class="underline" to="#skills">skills</NuxtLink>
        </div>
        <NuxtLink
            class="hidden text-xl sm:inline underline"
            href="mailto:samuel-poulin@outlook.com"
            >contact me</NuxtLink
        >
    </div>
</template>

<script lang="ts" setup>
const { data: result } = await useAsyncGql({
    operation: "headerAlert",
});
</script>
