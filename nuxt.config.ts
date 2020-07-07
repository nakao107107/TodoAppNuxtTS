import { Configuration } from '@nuxt/types'

const nuxtConfig: Configuration = {
  mode: 'universal',
  buildModules: ['@nuxt/typescript-build'],
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#fff' },
  css: [
  ],
  plugins: [
  ],
  typescript: {
    typeCheck: true,
    ignoreNotFoundWarnings: true
  },
  modules: [
    '@nuxtjs/eslint-module',
  ],
  build: {
    extend(config, ctx) {
    }
  },
  telemetry: false
}
module.exports = nuxtConfig
