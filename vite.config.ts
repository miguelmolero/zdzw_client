import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fullReload from 'vite-plugin-full-reload';
import CONFIG from './src/config/config'
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
    port: isProduction ? parseInt(CONFIG.VITE_PRODUCTION_CLIENT_PORT) : parseInt(CONFIG.VITE_DEVELOPMENT_CLIENT_PORT),
    hmr: {
      overlay: false,
    },
  },
})
