export default ({app}, inject) => {
  inject('isJa', () => {
    return this.$i18n.locale === 'ja'
  })
}
