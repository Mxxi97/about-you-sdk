import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  input: 'https://get.heyapi.dev/hey-api/backend',
  output: 'src/client',
  plugins: [
    '@hey-api/client-axios',
    { name: '@hey-api/typescript', enums: 'typescript' },
    { name: '@hey-api/sdk', transformer: true },
    { name: '@hey-api/transformers', dates: true },
    { name: '@hey-api/schemas', type: 'json' },
  ],
});
