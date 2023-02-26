import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@Assets': '/src/Assets',
      '@Pages': '/src/Pages',
      '@Components': '/src/Components',
      '@Utils': '/src/Utils',
      '@Hooks': '/src/Hooks',
    },
  },
  plugins: [react(), tsconfigPaths()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@Assets/Styles/font.scss";
          @import "@Assets/Styles/mixin.scss";
          @import "@Assets/Styles/variable.scss";
        `,
      },
    },
  },
  server: {
    port: 3001,
  },
});
