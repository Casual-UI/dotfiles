module.exports = {
  extends: [
    '@antfu/eslint-config-vue'
  ],
  rules: {
    "vue/custom-event-name-casing": [
      "error",
      "kebab-case"
    ]
  }
}