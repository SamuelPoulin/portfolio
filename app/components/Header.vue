<template>
    <div id="header-container">
        <nuxt-link id="logo-link" href="/">SP</nuxt-link>
        <div id="header-alert-container">
            <div class="header-alert-emoji">
                {{ result?.HeaderAlert?.emojiLeft }}
            </div>
            <div id="header-alert-text">
                {{ result?.HeaderAlert?.alert }}
            </div>
            <div class="header-alert-emoji">
                {{ result?.HeaderAlert?.emojiRight }}
            </div>
        </div>
        <div id="header-links-container">
            <NuxtLink class="header-link" to="#projects">projects</NuxtLink>
            <NuxtLink class="header-link" to="#about">about</NuxtLink>
            <NuxtLink class="header-link" to="#skills">skills</NuxtLink>
        </div>
        <nuxt-link
            class="header-link"
            id="header-contact-link"
            href="mailto:samuel-poulin@outlook.com"
            >contact me</nuxt-link
        >
    </div>
</template>

<style>
#header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 100px;
    width: 100%;
}

#logo-link {
    color: #000000;
    text-decoration: none;
    font-weight: 700;
    font-size: 20px;
}

#header-alert-container {
    display: flex;
    align-items: center;

    gap: 10px;

    user-select: none;
}

.header-alert-emoji {
    display: flex;
    align-items: center;

    font-size: 32px;
}

#header-alert-text {
    font-weight: 400;
    font-size: 20px;
}

#header-links-container {
    display: flex;

    gap: 50px;
}

.header-link {
    color: #000000;
    font-weight: 400;
    font-size: 20px;
}

/* lg */
@media only screen and (max-width: 1024px) {
    #header-links-container {
        gap: 25px;
    }

    #header-alert-container {
        display: none;
    }
}

/* sm */
@media only screen and (max-width: 640px) {
    #header-links-container {
        gap: 10px;
    }

    #header-contact-link {
        display: none;
    }
}
</style>

<script lang="ts" setup>
const { data: result } = await useAsyncGql({
    operation: "headerAlert",
});
</script>
