import { defineNuxtConfig } from 'nuxt3'
import i18n from './nuxt-i18n.config'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: [
    '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources',
    ['@intlify/nuxt3', i18n]
  ],
  css: [
    'normalize.css',
    '~/assets/scss/common.scss'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "~/assets/scss/_variables.scss";
            @import "~/assets/scss/_mixins.scss";
          `
        }
      }
    }
  }
})
