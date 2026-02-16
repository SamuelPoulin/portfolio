<template>
    <div id="landing-container">
        <div id="landing-infos-container">
            <div id="landing-intro">
                <h1 id="landing-name">SAMUEL POULIN</h1>
                <h2 class="landing-description">
                    {{ result?.LandingPageDescription.description }}
                </h2>
                <div id="landing-city-container">
                    <h2 class="landing-description">based in</h2>
                    <div id="landing-city">
                        <button
                            id="landing-button"
                            v-on:click="showBagel = !showBagel"
                        >
                            {{ showBagel ? "the city of bagels" : "Montréal" }}
                        </button>
                        <MontrealLogo id="landing-city-logo" />
                    </div>
                </div>
            </div>
            <div id="landing-links">
                <a
                    v-if="result?.AboutMe?.resume"
                    class="landing-link"
                    :href="result?.AboutMe?.resume?.url"
                    target="_blank"
                    >Resume</a
                >
                <nuxt-link
                    class="landing-link"
                    href="https://linkedin.com/in/samuel-poulin"
                    target="_blank"
                    >LinkedIn</nuxt-link
                >
                <nuxt-link
                    class="landing-link"
                    href="https://github.com/samuelpoulin"
                    target="_blank"
                    >Github</nuxt-link
                >
            </div>
        </div>
        <div id="landing-bagel-container" v-if="showBagel">
            <BagelCanvas />
        </div>
    </div>
</template>

<style scoped>
#landing-container {
    display: flex;
}

#landing-infos-container {
    display: flex;
    flex-direction: column;

    padding: 100px 0px 0px;
    gap: 175px;
}

#landing-name {
    margin: 0;

    white-space: nowrap;
    user-select: none;
    font-weight: 700;
    font-size: 112px;
}

.landing-description {
    margin: 0;

    user-select: none;
    font-weight: 500;
    font-size: 40px;
}

#landing-city-container {
    display: flex;

    gap: 10px;
}

#landing-city {
    display: flex;
    align-items: center;

    gap: 10px;
}

#landing-button {
    border: none;
    background: none;
    text-decoration-line: underline;
    font-weight: 500;
    font-size: 40px;
    cursor: pointer;
}

#landing-links {
    display: flex;

    gap: 25px;
}

.landing-link {
    color: #000000;
    font-weight: 500;
    font-size: 20px;
}

#landing-bagel-container {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
}

/* 2xl */
@media only screen and (max-width: 1536px) {
    #landing-infos-container {
        padding-top: 50px;

        gap: 200px;
    }

    #landing-city-container {
        gap: 5px;
    }

    #landing-name {
        font-size: 84px;
    }

    .landing-description,
    #landing-button {
        font-size: 30px;
    }

    #landing-city {
        gap: 5px;
    }

    #landing-city-logo {
        width: 30px;
        height: 30px;
    }
}

@media only screen and (max-width: 1280px) {
    #landing-bagel-container {
        display: none;
    }
}

/* lg */
@media only screen and (max-width: 1024px) {
    #landing-infos-container {
        padding-top: 25px;

        gap: 225px;
    }

    #landing-city-container {
        gap: 5px;
    }

    #landing-name {
        font-size: 56px;
    }

    .landing-description,
    #landing-button {
        font-size: 30px;
    }

    #landing-city {
        gap: 5px;
    }

    #landing-city-logo {
        width: 20px;
        height: 20px;
    }
}

/* md */
@media only screen and (max-width: 768px) {
    #landing-infos-container {
        padding-top: 15px;

        gap: 350px;
    }

    #landing-city-container {
        gap: 3px;
    }

    #landing-name {
        font-size: 46px;
    }

    .landing-description,
    #landing-button {
        font-size: 24px;
    }

    #landing-city {
        gap: 3px;
    }

    #landing-city-logo {
        width: 20px;
        height: 20px;
    }
}

/* sm */
@media only screen and (max-width: 640px) {
    #landing-infos-container {
        padding-top: 0px;

        gap: 350px;
    }

    #landing-city-container {
        gap: 0px;
    }

    #landing-name {
        font-size: 35px;
    }

    .landing-description,
    #landing-button {
        font-size: 20px;
    }

    #landing-city {
        gap: 0px;
    }

    #landing-city-logo {
        width: 20px;
        height: 20px;
    }
}
</style>

<script setup lang="ts">
const { result } = defineProps(["result"]);

const showBagel = ref(false);
</script>
