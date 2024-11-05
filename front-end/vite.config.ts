import { defineConfig } from 'vite'
import solidStyled from 'unplugin-solid-styled';
import solid from 'vite-plugin-solid'

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
})
