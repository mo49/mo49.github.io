module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Portfolio Site | Kazuki Mochizuki',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: 'Mochizuki Kazuki のポートフォリオサイトです' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: `/favicon.ico` }
    ]
  },
  basic: {
    name: 'recruiter',
    pass: 'iwantyou',
    match: /(virtual-cheki|hirameki|obayashi)$/
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: [
    '~/plugins/isJa',
  ],
  modules: [
    '@nuxtjs/style-resources',
    'nuxt-fontawesome',
    'nuxt-basic-auth-module',
    'nuxt-user-agent',
    [
      'nuxt-i18n',
      {
        locales: [
          { code: 'ja', iso: 'ja_JP' },
          { code: 'en', iso: 'en-US' },
        ],
        defaultLocale: 'ja',
        vueI18n: {
          fallbackLocale: 'ja',
        },
        vueI18nLoader: true
      }
    ]
  ],
  css: [
    'normalize.css'
  ],
  styleResources: {
    scss: [
      '~/assets/sass/_variable.scss',
      '~/assets/sass/_mixin.scss'
    ]
  },
  fontawesome: {
    // component: 'fa',
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
      {
        set: '@fortawesome/free-regular-svg-icons',
        icons: ['far']
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab']
      },
    ]
  }
}

