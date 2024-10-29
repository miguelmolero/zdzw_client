import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as dotenv from 'dotenv';

dotenv.config();
const isProduction = process.env.NODE_ENV === 'production';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: isProduction ? '/static/' : '/',
  server: {
    port: parseInt(process.env.VITE_CLIENT_PORT || '3000'),
  },
})
