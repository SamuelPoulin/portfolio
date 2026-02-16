<template>
    <ClientOnly>
        <TresCanvas
            :antialias="true"
            :alpha="true"
            :clearAlpha="0"
            :shadows="true"
        >
            <TresPerspectiveCamera
                :position="[0, 0, 30]"
                :fov="45"
                :make-default="true"
            />
            <TresAmbientLight :intensity="3" />

            <Suspense>
                <BagelModel />
            </Suspense>

            <OrbitControls :enable-pan="false" :enable-zoom="false" />
        </TresCanvas>
    </ClientOnly>
</template>

<script setup lang="ts">
import { OrbitControls } from "@tresjs/cientos";
</script>
