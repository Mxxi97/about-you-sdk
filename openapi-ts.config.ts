import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  input: './openapi.json',
  output: 'src/client',
  plugins: [
    '@hey-api/client-axios',
    { name: '@hey-api/typescript', enums: 'typescript' },
    { name: '@hey-api/sdk', transformer: false },
    { name: '@hey-api/transformers', dates: true },
    { name: '@hey-api/schemas', type: 'json' },
  ],
});
