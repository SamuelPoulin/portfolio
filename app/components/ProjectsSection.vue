<template>
    <div id="projects-container" v-if="result?.Projects">
        <a id="projects" />
        <div class="section-title-container">
            <h2 class="section-title"># previous work</h2>
        </div>
        <div id="projects-list">
            <div
                class="project-container"
                v-for="project of result?.Projects?.docs"
            >
                <nuxt-img
                    class="project-picture"
                    :src="project.picture.url"
                    :alt="project.picture.alt"
                    format="webp"
                />
                <div class="project-informations">
                    <h3 class="project-name">
                        {{ project.name }}
                    </h3>
                    <div class="project-description">
                        {{ project.description }}
                    </div>
                    <div class="project-description">
                        <span>Built with </span>
                        <span>
                            {{
                                project.skills
                                    .map((skill: any) => skill.name)
                                    .join(", ")
                            }}.
                        </span>
                    </div>
                </div>
                <div class="project-links">
                    <nuxt-link
                        class="project-link"
                        v-if="project.url"
                        :href="project.url"
                        target="_blank"
                        >Visit</nuxt-link
                    >
                    <nuxt-link
                        class="project-link"
                        v-if="project.githubUrl"
                        :href="project.githubUrl"
                        target="_blank"
                        >GitHub</nuxt-link
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#projects-container {
    display: flex;
    flex-direction: column;

    padding-top: 175px;
    gap: 10px;
}

#projects-list {
    display: flex;

    gap: 50px;
    padding-bottom: 25px;

    overflow-x: scroll;
}

.project-container {
    display: flex;
    flex-direction: column;

    gap: 10px;
    width: 300px;
}

.project-informations {
    display: flex;
    flex-direction: column;

    gap: 15px;
    height: 250px;
}

.project-links {
    display: flex;

    gap: 20px;
}

.project-link {
    color: #000000;
    font-weight: 400;
    font-size: 20px;
}

.project-picture {
    border-radius: 10px;

    width: 300px;
}

.project-name {
    margin: 0;

    font-weight: 500;
    font-size: 32px;
}

.project-description {
    font-weight: 400;
    font-size: 20px;
}

/* lg */
@media only screen and (max-width: 1024px) {
    #projects-list {
        flex-direction: column;
        overflow-x: auto;
    }

    .project-container {
        width: unset;
    }
}

/* md */
@media only screen and (max-width: 768px) {
    #projects-container {
        padding-top: 25px;
    }
}

/* sm */
@media only screen and (max-width: 640px) {
    #projects-container {
        padding-top: 25px;
    }
}
</style>

<script setup lang="ts">
const { result } = defineProps(["result"]);
</script>
