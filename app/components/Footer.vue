<template>
    <div
        class="flex flex-col-reverse md:flex-row items-center justify-between w-full gap-5 md:gap-0 py-12 md:py-0 md:h-24 text-lg"
    >
        <div class="flex gap-2.5 select-none">
            <div>Made with</div>
            <div class="animate-pulse-custom">💖</div>
            <div>in Montreal</div>
        </div>
        <div class="flex items-center border-b-2 border-black">
            <button v-on:click="scrollToTop">back to top</button>
            <Icon name="uil:arrow-up" size="24" />
        </div>
        <div class="select-none font-semibold">
            © {{ currentYear }} Samuel Poulin
        </div>
    </div>
</template>

<script setup lang="ts">
const scrollToTop = () => {
    window.scrollTo(0, 0);
};

const currentYear = new Date().getFullYear();
</script>
