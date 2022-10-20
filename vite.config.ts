import { defineConfig } from 'vite'
// import solidPlugin from 'vite-plugin-solid'
import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'

export default defineConfig({
  plugins: [
    // solidPlugin(),
  ],
  build: {
    target: 'esnext',
    rollupOptions: {
      plugins: [resolve(), babel({ babelHelpers: 'bundled' })],
    },
  },
})
