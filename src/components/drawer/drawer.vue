<script>
    export default {
        name: "drawer",
    };
</script>

<template>
    <div id="drawer">
        <router-link
            to="/"
            class="drawer__link"
        >
            Home
        </router-link>

        <router-link
            to="/login"
            class="drawer__link"
        >
            Login
        </router-link>

        <router-link
            to="/register"
            class="drawer__link"
        >
            Register
        </router-link>
    </div>
</template>

<style src="./drawer.scss" lang="scss"></style>
