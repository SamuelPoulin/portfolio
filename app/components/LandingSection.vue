<template>
    <div class="flex">
        <div
            class="flex flex-col pt-[100px] gap-[175px] max-2xl:pt-[50px] max-2xl:gap-[200px] max-lg:pt-[25px] max-lg:gap-[225px] max-md:pt-[15px] max-md:gap-[350px] max-sm:pt-0 max-sm:gap-[350px]"
        >
            <div>
                <h1
                    class="m-0 whitespace-nowrap select-none font-bold text-[112px] leading-[128px] max-2xl:text-[84px] max-2xl:leading-[96px] max-lg:text-[56px] max-lg:leading-[64px] max-md:text-[46px] max-md:leading-[52px] max-sm:text-[35px] max-sm:leading-[40px]"
                >
                    SAMUEL POULIN
                </h1>
                <h2
                    class="m-0 select-none font-medium text-[40px] leading-[34px] max-2xl:text-[30px] max-lg:text-[30px] max-md:text-[24px] max-md:leading-[28px] max-sm:text-[20px] max-sm:leading-[23px]"
                >
                    {{ result?.LandingPageDescription.description }}
                </h2>
                <div
                    class="flex gap-[10px] max-2xl:gap-[5px] max-lg:gap-[5px] max-md:gap-[3px]"
                >
                    <h2
                        class="m-0 select-none font-medium text-[40px] max-2xl:text-[30px] max-2xl:leading-[34px] max-lg:text-[30px] max-md:text-[24px] max-md:leading-[28px] max-sm:text-[20px] max-sm:leading-[23px]"
                    >
                        based in
                    </h2>
                    <div
                        class="flex items-center gap-[10px] max-2xl:gap-[5px] max-lg:gap-[5px] max-md:gap-[3px]"
                    >
                        <button
                            class="border-none bg-transparent underline font-medium tracking-tighter text-[40px] leading-[46px] cursor-pointer max-2xl:text-[30px] max-2xl:leading-[34px] max-lg:text-[30px] max-md:text-[24px] max-md:leading-[28px] max-sm:text-[20px] max-sm:leading-[23px]"
                            @click="showBagel = !showBagel"
                        >
                            {{ showBagel ? "the city of bagels" : "Montréal" }}
                        </button>
                        <MontrealLogo
                            class="max-2xl:w-[30px] max-2xl:h-[30px] max-lg:w-[20px] max-lg:h-[20px] max-md:w-[20px] max-md:h-[20px] max-sm:w-[20px] max-sm:h-[20px]"
                        />
                    </div>
                </div>
            </div>
            <div class="flex gap-[25px]">
                <a
                    v-if="result?.AboutMe?.resume"
                    class="text-black font-medium text-[20px]"
                    :href="result?.AboutMe?.resume?.url"
                    target="_blank"
                    >Resume</a
                >
                <NuxtLink
                    class="text-black font-medium text-[20px]"
                    href="https://linkedin.com/in/samuel-poulin"
                    target="_blank"
                    >LinkedIn</NuxtLink
                >
                <NuxtLink
                    class="text-black font-medium text-[20px]"
                    href="https://github.com/samuelpoulin"
                    target="_blank"
                    >Github</NuxtLink
                >
            </div>
        </div>
        <div
            v-if="showBagel"
            class="flex items-center justify-center w-full max-xl:hidden"
        >
            <BagelCanvas />
        </div>
    </div>
</template>

<script setup lang="ts">
const { result } = defineProps(["result"]);

const showBagel = ref(false);
</script>
