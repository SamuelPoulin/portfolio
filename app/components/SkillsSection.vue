<template>
    <div
        v-if="shuffledSkills?.length"
        class="flex flex-col py-[100px] gap-[30px] max-lg:py-[50px] max-md:py-[25px]"
    >
        <a id="skills" />
        <SectionTitle># things I picked up along the way</SectionTitle>

        <div class="hidden lg:block w-full overflow-hidden">
            <Vue3Marquee :duration="60" :pause-on-hover="true">
                <SkillCard
                    v-for="skill in shuffledSkills"
                    :key="skill.id"
                    :skill="skill"
                />
            </Vue3Marquee>
        </div>

        <div class="lg:hidden flex flex-col gap-[16px] overflow-hidden">
            <Vue3Marquee
                :duration="35"
                :pause-on-hover="true"
                direction="normal"
            >
                <SkillCard
                    v-for="skill in firstRowSkills"
                    :key="skill.id"
                    :skill="skill"
                />
            </Vue3Marquee>
            <Vue3Marquee
                :duration="35"
                :pause-on-hover="true"
                direction="reverse"
            >
                <SkillCard
                    v-for="skill in secondRowSkills"
                    :key="skill.id"
                    :skill="skill"
                />
            </Vue3Marquee>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Vue3Marquee } from "vue3-marquee";

const { data } = await useAsyncGql({
    operation: "skills",
});

const shuffledSkills = computed(() => {
    if (!data?.value?.Skills?.docs) return [];
    return [...data.value.Skills.docs].toSorted(() => Math.random() - 0.5);
});

const firstRowSkills = computed(() => {
    const mid = Math.ceil(shuffledSkills.value.length / 2);
    return shuffledSkills.value.slice(0, mid);
});

const secondRowSkills = computed(() => {
    const mid = Math.ceil(shuffledSkills.value.length / 2);
    return shuffledSkills.value.slice(mid);
});
</script>
