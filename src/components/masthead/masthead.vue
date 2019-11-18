<script>
  const search = () => import("components/search/search.vue");

  export default {
    name: "masthead",
    components: {
      search
    }
  };
</script>

<template>
  <div class="masthead">
    <figure class="masthead__logo">
      <router-link
        to="/"
        class="masthead__link"
      >
        podium
      </router-link>
    </figure>

    <div class="masthead__search">
      <search />
    </div>
  </div>
</template>

<style src="./masthead.scss" lang="scss"></style>
