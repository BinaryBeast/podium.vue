module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        "plugin:vue/recommended",
        "eslint:recommended",
    ],
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        /*
         * Stylistic issues
         */
        "block-spacing": "error",
        "brace-style": ["error", "stroustrup"],
        "indent": ["error", 4],
        "max-len": ["error", { "code": 120 }],
        "no-multiple-empty-lines": ["error", { max: 1 }],
        "quotes": ["error", "double"],
        "space-infix-ops": "error",
        /*
         * ECMAScript 6
         */
        "arrow-spacing": "error",
        /*
         * Vue: Strongly Recommended
         */
        "vue/attribute-hyphenation": "error",
        "vue/html-closing-bracket-newline": "error",
        "vue/html-closing-bracket-spacing": "error",
        "vue/html-end-tags": "error",
        "vue/html-indent": ["error", 4],
        "vue/html-quotes": "error",
        "vue/html-self-closing": ["error", {
            html: {
                normal: "never",
                void: "always"
            }
        }],
        "vue/max-attributes-per-line": "error",
        "vue/multiline-html-element-content-newline": ["error", {
            ignores: ["textarea"],
        }],
        "vue/mustache-interpolation-spacing": "error",
        "vue/name-property-casing": "error",
        "vue/no-multi-spaces": "error",
        "vue/no-spaces-around-equal-signs-in-attribute": "error",
        "vue/no-template-shadow": "error",
        "vue/prop-name-casing": "error",
        "vue/require-default-prop": "error",
        "vue/require-prop-types": "error",
        "vue/singleline-html-element-content-newline": ["error", {
            ignoreWhenNoAttributes: false,
        }],
        "vue/v-bind-style": "error",
        "vue/v-on-style": "error",
        /*
         * Vue: Recommended
         */
        "vue/attributes-order": "error",
        "vue/no-v-html": "error",
        "vue/order-in-components": "error",
        "vue/this-in-template": "error",
        /*
         * Vue: Uncategorised
         */
        "vue/array-bracket-spacing": ["error", "never"],
        "vue/arrow-spacing": "error",
        "vue/block-spacing": "error",
        "vue/brace-style": ["error", "stroustrup"],
        "vue/camelcase": "error",
        "vue/comma-dangle": ["error", "always-multiline"],
        "vue/component-name-in-template-casing": ["error", "kebab-case", {
            registeredComponentsOnly: false
        }],
        // documented but not yet implemented: "vue/dot-location": ["error", "property"],
        "vue/eqeqeq": ["error", "always"],
        "vue/key-spacing": "error",
        // documented but not yet implemented: "vue/keyword-spacing": "error",
        "vue/match-component-file-name": "error",
        // documented but not yet implemented: "vue/no-deprecated-scope-attribute": "error",
        // documented but not yet implemented: "vue/no-empty-pattern": "error",
        "vue/no-restricted-syntax": "error",
        "vue/object-curly-spacing": ["error", "never"],
        "vue/require-direct-export": "error",
        "vue/script-indent": [
            "error",
            4,
            {
                baseIndent: 1,
                switchCase: 1
            },
        ],
        "vue/space-infix-ops": "error",
        "vue/space-unary-ops": "error",
        "vue/v-on-function-call": "error",
    },
    overrides: [
        {
            files: ["*.vue"],
            rules: {
                indent: "off"
            },
        },
    ],
    parserOptions: {
        parser: "babel-eslint",
    },
};
