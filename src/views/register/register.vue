<script>
    const field = () => import("components/field/field.vue");

    export default {
        name: "register",
        components: {
            field,
        },
    };
</script>

<template>
    <form class="register">
        <h1>
            Register
        </h1>

        <field
            label="Email address"
            name="email"
            type="email"
        />
        <field
            label="Confirm email address"
            name="confirm_email"
            type="email"
        />

        <field
            label="Password"
            name="password"
            type="password"
        />
        <field
            label="Confirm password"
            name="confirm_password"
            type="password"
        />
    </form>
</template>
