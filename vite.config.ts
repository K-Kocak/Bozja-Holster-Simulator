import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    proxy: {
      '/api': 'http://localhost:5000', // Assuming your Express server runs on port 5000
    },
  },
  esbuild: {
    supported: {
      'top-level-await': true,
    }
  },
  build: {
    rollupOptions: {
      external: ['serverless-http', 'cors'],
    }
  }
})
