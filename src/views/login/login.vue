<script>
    const field = () => import("components/field/field.vue");

    export default {
        name: "login",
        components: {
            field
        },
    };
</script>

<template>
    <form class="login">
        <h1>
            Login
        </h1>

        <field
            label="Email address"
            name="email"
            type="email"
        />

        <field
            label="Password"
            name="password"
            type="password"
        />
    </form>
</template>
