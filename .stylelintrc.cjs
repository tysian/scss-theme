module.exports = {
  extends: ['stylelint-config-recommended-scss', 'stylelint-config-prettier'],
  rules: {
    'font-family-name-quotes': 'always-where-required',
    'font-weight-notation': 'named-where-possible',
    'function-url-no-scheme-relative': true,
    'function-url-quotes': 'always',
    'string-quotes': 'single',
    'value-keyword-case': 'lower',
    'unit-disallowed-list': [],
    'max-empty-lines': 2,
    'no-descending-specificity': true,
    'no-duplicate-selectors': true,
    'font-family-no-missing-generic-family-keyword': null,
    'no-descending-specificity': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    'custom-property-empty-line-before': [
      'always',
      {
        except: ['after-custom-property'],
        ignore: ['after-comment', 'first-nested', 'inside-single-line-block'],
        severity: 'warning',
      },
    ],
    'rule-empty-line-before': [
      'always',
      {
        ignore: ['after-comment', 'first-nested'],
        severity: 'warning',
      },
    ],
    'declaration-empty-line-before': [
      'always',
      {
        except: ['after-declaration'],
        ignore: ['after-comment', 'first-nested', 'inside-single-line-block'],
        severity: 'warning',
      },
    ],
  },
  ignoreFiles: ['node_modules/*'],
  defaultSeverity: 'error',
  customSyntax: 'postcss-html',
};
