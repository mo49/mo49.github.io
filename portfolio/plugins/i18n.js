import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app, store }) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'ja',
    messages: {
      ja: Object.assign(
        require('~/locales/ja.json'),
        require('~/locales/ja-skillset.json'),
        require('~/locales/ja-works.json'),
      ),
      en: Object.assign(
        require('~/locales/en.json'),
        require('~/locales/en-skillset.json'),
        require('~/locales/en-works.json'),
      ),
    }
  })

  app.i18n.path = (link) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`
    }

    return `/${app.i18n.locale}/${link}`
  }
}
