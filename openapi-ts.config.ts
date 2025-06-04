import { defaultPlugins, defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  input: './openapi.json',
  output: 'src/client',
  plugins: [
    ...defaultPlugins,
    '@hey-api/client-axios',
    { name: '@hey-api/schemas' },
  ],
});
