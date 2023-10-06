// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: '%s | Portfolio Site',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' },
        { hid: 'description', name: 'description', content: 'Mochizuki Kazuki のポートフォリオサイトです' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
  },
  plugins: [
    '~/plugins/scroll-behavior'
  ],
  modules: [
    // '@nuxtjs/stylelint-module',
    // '@nuxtjs/style-resources',
    // '@intlify/nuxt3'
  ],
  // intlify: {
  //   localeDir: 'locales',
  //   vueI18n: {
  //     locale: 'en',
  //     fallbackLocale: 'en'
  //   }
  // },
  css: [
    // 'normalize.css',
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
