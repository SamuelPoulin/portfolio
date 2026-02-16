<template>
    <TresGroup
        ref="groupRef"
        :rotation="[0, -Math.PI / 8, 0]"
        @pointerover="onPointerOver"
        @pointerout="onPointerOut"
    >
        <primitive v-if="model" :object="model" :scale="1" />
    </TresGroup>
</template>

<script setup lang="ts">
import { shallowRef, ref, onMounted, onBeforeUnmount } from "vue";
import type { Group, Object3D } from "three";
import { DRACOLoader, GLTFLoader } from "three-stdlib";

const groupRef = ref<Group | null>(null);
const model = shallowRef<Object3D | null>(null);

let frameId: number | null = null;
let lastTime = 0;
let dracoLoader: DRACOLoader | null = null;

const setCursor = (value: string) => {
    if (typeof document === "undefined") return;
    document.body.style.cursor = value;
};

const onPointerOver = () => setCursor("pointer");
const onPointerOut = () => setCursor("");

const animate = (time: number) => {
    const delta = (time - lastTime) / 1000;
    lastTime = time;

    if (groupRef.value) {
        groupRef.value.rotation.y += delta * 0.4;
    }

    frameId = requestAnimationFrame(animate);
};

onMounted(() => {
    const loader = new GLTFLoader();
    dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
    loader.setDRACOLoader(dracoLoader);
    loader.load(
        "/models/bagel.glb",
        (gltf) => {
            model.value = gltf.scene;
        },
        undefined,
        (error) => {
            console.error("Failed to load /models/bagel.glb", error);
        },
    );

    frameId = requestAnimationFrame(animate);
});

onBeforeUnmount(() => {
    if (frameId) cancelAnimationFrame(frameId);
    if (dracoLoader) dracoLoader.dispose();
    setCursor("");
});
</script>
