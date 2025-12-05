import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

// ⬇️ ESM-friendly dynamic import
const unusedImportsPlugin = await import('eslint-plugin-unused-imports');

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});
const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    // -
    'prettier', // ✅ Disables conflicting ESLint rules
  ),
  {
    plugins: {
      'unused-imports': unusedImportsPlugin.default,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',

      // 🔍 Warn about unused imports and variables
      'unused-imports/no-unused-imports': 'warn',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
];

export default eslintConfig;
