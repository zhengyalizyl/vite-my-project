import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import  path from 'path';

const dirname = path.resolve();

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  resolve:{
    alias: {
      '@':path.resolve(dirname,'/src')
    },
  },
  server:{
    host:'localhost',//'localhost ' 也可以
    port:3000,
    open:true,//启动时自动打开浏览器
    proxy:{ 
      '/api': {
        target: 'https://api.example.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
