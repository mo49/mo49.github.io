module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue'
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'scss/double-slash-comment-empty-line-before': null,
    'declaration-empty-line-before': null,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'alpha-value-notation': 'number',
    'at-rule-empty-line-before': 'never',
    'function-url-quotes': 'never',
    'no-descending-specificity': null,
    'no-duplicate-selectors': null,
    'rule-empty-line-before': 'never-multi-line',
    'selector-class-pattern': null,
    'comment-no-empty': true,
    'max-empty-lines': 2,
    'block-no-empty': null,
    'color-no-invalid-hex': true,
    'declaration-colon-space-after': 'always',
    'color-hex-case': null,
    'color-function-notation': null,
    'color-hex-length': null,
    'declaration-block-no-duplicate-custom-properties': null,
    'max-line-length': null,
    'property-no-vendor-prefix': null
  }
}
