import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  typescript: true,
}, {
  rules:  {
    "vue/custom-event-name-casing": [
      "error",
      "kebab-case"
    ]
  }
})