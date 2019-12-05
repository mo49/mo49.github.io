export default ({app}, inject) => {
  inject('isJa', () => {
    return app.i18n.locale === 'ja'
  })
}
