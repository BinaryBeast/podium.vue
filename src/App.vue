<script>
  import "typeface-nunito-sans";

  const masthead = () => import("components/masthead/masthead.vue");
  const drawer = () => import("components/drawer/drawer.vue");
  const inner = () => import("components/inner/inner.vue");

  export default {
    name: "app",
    components: {
      masthead,
      drawer,
      inner,
    },
  };
</script>

<template>
  <div id="podium">
    <masthead />

    <drawer />

    <inner>
      <router-view />
    </inner>
  </div>
</template>

<style src="styles/podium.scss" lang="scss"></style>
