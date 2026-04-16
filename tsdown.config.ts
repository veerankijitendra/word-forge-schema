import { defineConfig } from 'tsdown';

const config = defineConfig({
  entry: './src/index.ts',
  outDir: './docs',
  tsconfig: './tsconfig.json',
  dts: true,
  clean: true,
});

export default config;
