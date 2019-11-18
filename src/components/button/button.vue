<script>
  export default {
    name: "button",
    props: {
      caption: {
        type: String,
        default: ""
      },
    },
  };
</script>

<template>
  <button
    class="button"
    type="button"
  >
    <span class="button__caption">
      {{ caption }}
    </span>
  </button>
</template>

<style src="./button.scss" lang="scss"></style>
