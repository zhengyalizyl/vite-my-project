import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import  path from 'path';
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
const dirname = path.resolve();

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    //使用svg图标
    createSvgIconsPlugin({
      iconDirs:[path.resolve(process.cwd(), "src/assets/icons/")],
      symbolId: "icon-[dir]-[name]"
    })
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
  },
  build:{
    outDir:'dist',
    //esbuild打包更快，但是不能去除 console.log，去除 console 使用 terser 模式
    minify:'esbuild',
    // minify:"terser",
    // terserOptions:{
    //   compress:{
    //     drop_console:true,
    //     drop_debugger:true
    // }
    // },
  rollupOptions:{
    output:{
      chunkFileNames:'assets/js/[name]-[hash].js',
      entryFileNames:'assets/js/[name]-[hash].js',
      assetFileNames:'assets/[ext]/[name]-[hash].[ext]'
    }
  }
  }
})
