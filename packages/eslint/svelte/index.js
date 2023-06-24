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
      rules: {
        // conflict with svelte syntax
        'import/no-mutable-exports': 'off',
        'no-unused-expressions': 'off',
        'no-undef-init': 'off',
        
        // conflict with prettier
        '@typescript-eslint/comma-dangle': 'off',
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
    },
  ],
}