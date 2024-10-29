import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    force: true, // Vite가 의존성을 다시 최적화하도록 강제
  },
  plugins: [react()],
});
