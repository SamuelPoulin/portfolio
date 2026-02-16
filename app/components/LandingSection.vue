<template>
    <div class="flex flex-col">
        <div
            class="flex flex-row min-h-[575px] max-md:min-h-[450px] max-md:flex-col"
        >
            <div class="flex flex-1 flex-col">
                <h1
                    class="pt-[100px] max-2xl:pt-[50px] max-lg:pt-[25px] max-md:pt-[15px] max-sm:pt-0 m-0 whitespace-nowrap select-none font-bold text-[112px] leading-[128px] max-2xl:text-[84px] max-2xl:leading-[96px] max-lg:text-[56px] max-lg:leading-[64px] max-md:text-[46px] max-md:leading-[52px] max-sm:text-[35px] max-sm:leading-[40px]"
                >
                    SAMUEL POULIN
                </h1>
                <h2
                    class="m-0 select-none font-medium text-[40px] leading-[34px] max-2xl:text-[30px] max-lg:text-[30px] max-md:text-[24px] max-md:leading-[28px] max-sm:text-[20px] max-sm:leading-[23px]"
                >
                    {{ data?.LandingPageDescription?.description }}
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
            <div
                v-if="showBagel"
                class="flex flex-1 min-w-0 min-h-0 items-center justify-center"
            >
                <BagelScene />
            </div>
        </div>
        <div class="flex gap-[25px]">
            <NuxtLink
                v-if="data?.AboutMe?.resume?.url"
                class="text-black font-medium text-[20px] underline"
                :href="data?.AboutMe?.resume?.url"
                target="_blank"
                >Resume</NuxtLink
            >
            <NuxtLink
                class="text-black font-medium text-[20px] underline"
                href="https://linkedin.com/in/samuel-poulin"
                target="_blank"
                >LinkedIn</NuxtLink
            >
            <NuxtLink
                class="text-black font-medium text-[20px] underline"
                href="https://github.com/samuelpoulin"
                target="_blank"
                >Github</NuxtLink
            >
        </div>
    </div>
</template>

<script setup lang="ts">
const { data } = await useAsyncGql({
    operation: "landingPage",
});

const showBagel = ref(false);
</script>
