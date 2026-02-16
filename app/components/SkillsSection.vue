<template>
    <div
        v-if="result?.Skills"
        class="flex flex-col py-[100px] gap-[10px] max-lg:py-[50px] max-md:py-[25px]"
    >
        <a id="skills" />
        <div class="section-title-container">
            <h2 class="section-title"># things I picked up along the way</h2>
        </div>
        <div class="flex flex-wrap gap-[10px]">
            <div
                class="flex flex-col gap-[10px] p-[25px] rounded-[10px] bg-[#ececec] max-lg:p-[15px] max-md:items-center max-md:flex-grow"
                v-for="skill of result.Skills.docs"
                :key="skill.name"
            >
                <div class="flex items-center gap-[10px]">
                    <NuxtImg
                        class="max-lg:w-[30px] max-lg:h-[30px]"
                        :src="skill.logo.url"
                        :alt="skill.logo.alt"
                        format="webp"
                    />
                    <div
                        class="select-none font-medium text-[32px] max-lg:text-[24px]"
                    >
                        {{ skill.name }}
                    </div>
                </div>
                <div
                    class="select-none font-normal text-[20px] max-lg:text-[16px]"
                >
                    Experience: ~{{ skill.experience }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const { result } = defineProps(["result"]);
</script>
