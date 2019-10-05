<script>
    import "typeface-overpass";

    const drawer = () => import("components/drawer/drawer.vue");
    const inner = () => import("components/inner/inner.vue");

    export default {
        name: "app",
        components: {
            drawer,
            inner,
        },
    };
</script>

<template>
    <div id="podium">
        <drawer />

        <inner>
            <router-view />
        </inner>
    </div>
</template>

<style src="styles/podium.scss" lang="scss"></style>
