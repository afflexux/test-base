import { FlatCompat } from '@eslint/eslintrc'
import withNuxt from './.nuxt/eslint.config.mjs'

const compat = new FlatCompat()

export default withNuxt({}, ...compat.config({
  rules: {
    'vue/block-order': ['error', {
      order: ['template', 'script', 'style'],
    }],
    'vue/multi-word-component-names': 'off',
    'tailwindcss/no-custom-classname': 'off',
    'tailwindcss/migration-from-tailwind-2': 'off',
    'vue/html-self-closing': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
}))
