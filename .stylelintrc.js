module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-scss',
    'stylelint-config-prettier',
    'stylelint-config-css-modules',
  ],
  plugins: ['stylelint-scss'],
  rules: {
    'font-family-name-quotes': 'always-where-required',
    'function-url-quotes': [
      'always',
      {
        except: ['empty'],
      },
    ],
    'selector-attribute-quotes': 'always',
    'string-quotes': 'single',
    'max-nesting-depth': 3,
    'selector-max-compound-selectors': 3,
    'selector-max-specificity': '0,3,2',
    'declaration-no-important': true,
    'at-rule-no-vendor-prefix': true,
    'media-feature-name-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'selector-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,
    'no-empty-source': null,
    'selector-class-pattern': '[a-z-]+',
    'selector-id-pattern': '[a-z-]+',
    'selector-max-id': 0,
    'selector-no-qualifying-type': true,
    'selector-max-universal': 0,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['custom-elements', 'default-namespace'],
      },
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['ng-deep'],
      },
    ],
    'unit-allowed-list': ['px', '%', 'em', 'rem', 'vw', 'vh', 'deg', 's'],
    'max-empty-lines': 2,
    'max-line-length': 120,
  },
};