<script>
  const icon = () => import("components/icon/icon.vue");

  export default {
    name: "search",
    components: {
      icon
    },
  };
</script>

<template>
  <form class="search">
    <label
      for="search_term"
      class="search__label"
    >
      <input
        id="search_term"
        class="search__input"
        name="search_term"
        type="text"
        placeholder="test"
      />
    </label>

    <button
      class="search__submit"
      type="submit"
    >
      <icon name="login" />
    </button>
  </form>
</template>

<style src="./search.scss" lang="scss"></style>
