module.exports = {
  extends: [
    '@casual-ui/eslint-config-typescript',
    "plugin:svelte/recommended"
  ],
  parserOptions: {
    extraFileExtensions: [".svelte"],
  },
  overrides: [
    {
      files: ["*.svelte"],
      parser: "svelte-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    },
  ],
  "rules": {
    // Conflict with svelte prettier plugin
    'antfu/if-newline': 'off',
    'operator-linebreak': [
      'error', 
      'after', { 
        overrides: { 
          '?': 'before', ':': 'before' 
        } 
      }
    ],
  }
}