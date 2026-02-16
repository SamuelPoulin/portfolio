<template>
    <div
        v-if="result?.Projects"
        class="flex flex-col gap-2.5 pt-[30px] md:pt-0 2xl:pt-[80px]"
    >
        <a id="projects" />
        <SectionTitle># previous work</SectionTitle>
        <div class="flex gap-[50px] pb-[25px] overflow-x-scroll">
            <div
                class="flex flex-col gap-2.5 min-w-[300px] w-[300px]"
                v-for="project of result?.Projects?.docs"
            >
                <NuxtImg
                    class="w-[300px] rounded-[10px]"
                    :src="project.picture.url"
                    :alt="project.picture.alt"
                    format="webp"
                />
                <div class="flex flex-col gap-[15px] h-[250px]">
                    <h3 class="m-0 font-medium text-[32px]">
                        {{ project.name }}
                    </h3>
                    <div class="font-normal text-[20px] leading-[24px]">
                        {{ project.description }}
                    </div>
                    <div class="font-normal text-[20px] leading-[24px]">
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
                <div class="flex gap-5 text-[20px]">
                    <NuxtLink
                        class="underline"
                        v-if="project.url"
                        :href="project.url"
                        target="_blank"
                        >Visit</NuxtLink
                    >
                    <NuxtLink
                        class="underline"
                        v-if="project.githubUrl"
                        :href="project.githubUrl"
                        target="_blank"
                        >GitHub</NuxtLink
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const { result } = defineProps(["result"]);
</script>
