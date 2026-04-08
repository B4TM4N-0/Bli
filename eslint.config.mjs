// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    "vue/max-attributes-per-line": "off",
    "vue/require-default-prop": "off",
    "vue/multi-word-component-names": "off"
  }
})