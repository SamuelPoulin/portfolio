<template>
    <div id="skills-container" v-if="result?.Skills">
        <a id="skills" />
        <div class="section-title-container">
            <h2 class="section-title"># things I picked up along the way</h2>
        </div>
        <div id="skills-list">
            <div
                class="skill-container"
                v-for="skill of result.Skills.docs"
                :key="skill.name"
            >
                <div class="skill-informations">
                    <nuxt-img
                        class="skill-logo"
                        :src="skill.logo.url"
                        :alt="skill.logo.alt"
                        format="webp"
                    />
                    <div class="skill-name">{{ skill.name }}</div>
                </div>
                <div class="skill-experience">
                    Experience: ~{{ skill.experience }}
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#skills-container {
    display: flex;
    flex-direction: column;

    padding: 100px 0px;
    gap: 10px;
}

#skills-list {
    display: flex;
    flex-wrap: wrap;

    gap: 10px;
}

.skill-container {
    display: flex;
    flex-direction: column;

    gap: 10px;
    padding: 25px;

    border-radius: 10px;
    background-color: #ececec;
}

.skill-informations {
    display: flex;
    align-items: center;

    gap: 10px;
}

.skill-name {
    user-select: none;
    font-weight: 500;
    font-size: 32px;
}

.skill-experience {
    user-select: none;
    font-weight: 400;
    font-size: 20px;
}

/* lg */
@media only screen and (max-width: 1024px) {
    #skills-container {
        padding: 50px 0px;
    }

    .skill-container {
        padding: 15px;
    }

    .skill-name {
        font-size: 24px;
    }

    .skill-experience {
        font-size: 16px;
    }

    .skill-logo {
        width: 30px;
        height: 30px;
    }
}

/* md */
@media only screen and (max-width: 768px) {
    #skills-container {
        padding: 25px 0px;
    }

    .skill-container {
        align-items: center;
        flex-grow: 1;
    }
}
</style>

<script setup lang="ts">
const { result } = defineProps(["result"]);
</script>
