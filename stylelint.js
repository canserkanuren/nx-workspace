module.exports = {
  "extends": ["stylelint-config-standard", "stylelint-config-prettier"]
  "plugins": [
    "stylelint-no-browser-hacks/lib",
    "stylelint-scss"
  ],
  "rules": {
    "block-closing-brace-newline-after": "always",
    "color-no-invalid-hex": true,
    "indentation": 2,
    "property-no-unknown": true,
    "plugin/no-browser-hacks": [true, {
      "browsers": [
        "last 2 versions",
        "ie >=8"
      ]
    }],
    "max-empty-lines": 1,
    "value-keyword-case": "lower",
    "at-rule-empty-line-before": null,
    "rule-empty-line-before": null,
    "at-rule-no-unknown": [
        true,
        {
            "ignoreAtRules": ["extends", "ignores", "include", "if", "else", "mixin"]
        }
    ],
    "selector-type-no-unknown": null,
    "selector-pseudo-element-no-unknown": null
  }
}