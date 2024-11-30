import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fullReload from 'vite-plugin-full-reload';
import * as dotenv from 'dotenv';

dotenv.config();
const isProduction = process.env.NODE_ENV === 'production';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    fullReload('./**/*', {
      root: __dirname,
      delay: 0,
      always: true
    })
  ],
  base: isProduction ? '/static/' : '/',
  server: {
    port: parseInt(process.env.VITE_CLIENT_PORT || '3000'),
    hmr: {
      overlay: false,
    },
  },
})
