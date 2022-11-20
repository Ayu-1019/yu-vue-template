import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { themePreprocessorPlugin } from '@zougt/vite-plugin-theme-preprocessor'
import Unocss from 'unocss/vite'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  plugins: [
    vue(),
    Unocss(),
    themePreprocessorPlugin({
      less: {
        multipleScopeVars: [
          {
            scopeName: 'theme-light',
            path: resolve('src/assets/style/theme-light.less')
          },
          {
            scopeName: 'theme-dark',
            path: resolve('src/assets/style/theme-dark.less')
          }
        ]
      }
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
})
