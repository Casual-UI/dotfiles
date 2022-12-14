module.exports = {
  "extends": ["@casual-ui/eslint-config-typescript"],
  "plugins": [
    "svelte3"
  ],
   "overrides": [
    {
      "files": ["*.svelte"],
      "processor": "svelte3/svelte3",
      "rules": {
        "@typescript-eslint/comma-dangle": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "comma-dangle": ["error", "only-multiline"],
        "import/no-mutable-exports": "off",
        "import/first": "off",
        "no-multiple-empty-lines": "off",
        "no-undef-init": "off",
        "no-unused-expressions": "off",
        "no-tabs": ["error", { "allowIndentationTabs": true }]
      }
    }
  ],
  "settings": {
    "svelte3/typescript": true
  }
}