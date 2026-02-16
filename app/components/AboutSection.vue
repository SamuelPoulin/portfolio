<template>
    <div class="flex flex-col pt-[100px] gap-[10px]">
        <a id="about" />
        <SectionTitle> # about me </SectionTitle>
        <div
            class="flex gap-[150px] pr-[150px] max-lg:flex-col max-lg:gap-[50px] max-lg:pr-0 max-md:gap-[25px]"
        >
            <NuxtImg
                v-if="data?.AboutMe?.picture?.url"
                class="min-w-[350px] w-[350px] max-sm:w-full object-cover rounded-[10px]"
                :src="data?.AboutMe?.picture?.url"
                :alt="data?.AboutMe?.picture?.alt"
                format="webp"
            />
            <div class="flex flex-col gap-[50px] max-md:gap-[25px] select-none">
                <div class="font-medium text-[40px] max-md:text-[20px]">
                    {{ data?.AboutMe?.opener }}
                </div>
                <div
                    class="text-[40px] leading-[50px] max-md:text-[20px] max-md:leading-[24px]"
                >
                    {{ data?.AboutMe?.description }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const { data } = await useAsyncGql({
    operation: "aboutMe",
});
</script>
