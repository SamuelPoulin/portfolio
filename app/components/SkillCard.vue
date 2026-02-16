<template>
    <div
        class="flex-shrink-0 w-[160px] bg-[#f5f5f5] rounded-[12px] p-[20px] border border-black/5 mx-[8px] max-lg:w-[140px] max-lg:p-[16px] max-md:w-[120px] max-md:p-[12px] max-md:mx-[6px]"
    >
        <div class="flex flex-col items-center gap-[12px] max-md:gap-[8px]">
            <div
                class="w-[40px] h-[40px] flex items-center justify-center max-lg:w-[36px] max-lg:h-[36px] max-md:w-[32px] max-md:h-[32px]"
            >
                <NuxtImg
                    class="max-w-full max-h-full object-contain"
                    :src="skill.logo?.url"
                    :alt="skill.logo?.alt"
                    format="webp"
                />
            </div>
            <div class="text-center">
                <div
                    class="font-semibold text-[15px] text-black/90 mb-[4px] max-lg:text-[14px] max-md:text-[13px]"
                >
                    {{ skill.name }}
                </div>
                <div class="text-[12px] text-black/50 max-md:text-[11px]">
                    {{ skill.experience }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    skill: any;
}>();
</script>
