import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const excludedFiles = [
  // "test.svg",
  'Roboto-Bold.ttf',
  'Roboto-Regular.ttf',
];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
  },
  // dont hash fonts and svgs
  build: {
    rollupOptions: {
      output: {
        assetFileNames: function (file) {
          return excludedFiles.includes(file.name) ? `assets/[name].[ext]` : `assets/[name]-[hash].[ext]`;
        },
      },
    },
  },
});
