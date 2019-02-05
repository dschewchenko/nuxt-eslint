module.exports = {
    "env": {
        "browser": true,
        "node": true
    },
    extends: [
        // add more generic rulesets here, such as:
        'eslint:recommended',
        'plugin:vue/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        'vue/no-v-html': false,
        "indent": ["error", 2],
        "@typescript-eslint/indent": ["error", 2],
        '@typescript-eslint/no-explicit-any': false
    },
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "parser": "@typescript-eslint/parser",
        "project": "./tsconfig.json",
        "tsconfigRootDir": "./",
        "extraFileExtensions": [".vue"]
    }
}