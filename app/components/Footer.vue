<template>
    <div id="footer-container">
        <div id="footer-love-container">
            <div>Made with</div>
            <div id="footer-love-heart">💖</div>
            <div>from Montréal</div>
        </div>
        <div id="footer-top-container">
            <button id="footer-top-button" v-on:click="scrollToTop">
                back to top
            </button>
            <ArrowUp />
        </div>
        <div id="footer-copyright">© {{ currentYear }} Samuel Poulin</div>
    </div>
</template>

<style>
@keyframes pulse {
    0% {
        transform: scale(1.2);
    }

    50% {
        transform: scale(1);
    }

    100% {
        transform: scale(1.2);
    }
}

#footer-container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 100px;
    width: 100%;
}

#footer-love-container {
    display: flex;

    gap: 10px;

    user-select: none;
    font-weight: 400;
    font-size: 20px;
}

#footer-love-heart {
    animation: 2s infinite ease-in-out pulse;
}

#footer-top-container {
    display: flex;
    align-items: center;

    font-weight: 400;
    font-size: 20px;
    border-bottom: 2px solid #000000;
}

#footer-top-button {
    border: none;
    background: none;
    cursor: pointer;
}

#footer-copyright {
    user-select: none;
    font-weight: 700;
    font-size: 20px;
}

@media only screen and (max-width: 768px) {
    #footer-container {
        flex-direction: column-reverse;
        height: unset;
        gap: 20px;
        padding: 50px 0px;
    }
}
</style>

<script setup lang="ts">
const scrollToTop = () => {
    window.scrollTo(0, 0);
};

const currentYear = new Date().getFullYear();
</script>
