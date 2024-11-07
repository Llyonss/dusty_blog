import { defineConfig } from 'vite'
import solidStyled from 'unplugin-solid-styled';
import solid from 'vite-plugin-solid'
import * as path from 'path'

export default defineConfig({
  plugins: [
    solid(),
    solidStyled.vite({
      prefix: 'dusty-blog',
      filter: {
        include: 'src/**/*.{ts,js,tsx,jsx}',
        exclude: 'node_modules/**/*.{ts,js,tsx,jsx}',
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
