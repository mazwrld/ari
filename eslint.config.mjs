import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'
import prettierConfig from 'eslint-config-prettier/flat'

const eslintConfig = [
  ...nextCoreWebVitals,
  prettierConfig,
  {
    settings: {
      next: {
        rootDir: ['./'],
      },
    },
    rules: {
      '@next/next/no-html-link-for-pages': 'off',
      'react/display-name': 'off',
      'react/jsx-key': 'off',
    },
  },
  {
    ignores: ['dist/*', '.cache', 'public', 'node_modules', '*.esm.js'],
  },
]

export default eslintConfig
