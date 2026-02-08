import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  input: '../../openapi.yaml',
  output: {
    path: 'src',
    lint: false,
    format: false,
  },
  plugins: [
    '@hey-api/client-fetch',
    '@hey-api/typescript',
    '@hey-api/sdk',
  ],
});
