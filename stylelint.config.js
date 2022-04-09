module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue'
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'max-line-length': null,
    'selector-class-pattern': null,
    'at-rule-no-unknown': [
      true,
      { ignoreAtRules: ['include', 'mixin', 'each'] }
    ],
    'scss/no-global-function-names': null,
    'function-no-unknown': null
  }
}
