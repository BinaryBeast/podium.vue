<script>
    export default {
        name: "field",
        props: {
            label: {
                type: String,
                default: "",
            },
            name: {
                type: String,
                default: "",
            },
        },
    };
</script>

<template>
    <div class="field">
        <label
            class="field__label"
            :for="name"
        >
            {{ label }}
        </label>

        <input
            :id="name"
            :name="name"
            :type="type"
            class="field__input"
        />
    </div>
</template>

<style src="./field.scss" lang="scss"></style>
