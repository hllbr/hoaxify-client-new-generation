/* --- Begin .eslintrc.cjs --- */

module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended"
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  settings: {
    react: {
      version: "18.2"
    }
  },
  plugins: [
    "react-refresh",
    "unused-imports" // Added the unused-imports plugin
  ],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      {
        allowConstantExport: true
      }
    ],
    "react/jsx-no-target-blank": "off", // Disabled this rule correctly
    "react/jsx-max-props-per-line": [
      "error", // Changed to 'error' to enforce this rule strictly
      {
        maximum: 1,
        when: "multiline"
      }
    ],
    "react/jsx-closing-bracket-location": [
      "error", // Enforce bracket location to be line-aligned
      {
        selfClosing: "line-aligned",
        nonEmpty: "line-aligned"
      }
    ],
    "unused-imports/no-unused-imports": "error" // Rule to remove unused imports
  }
};

/* --- End .eslintrc.cjs --- */
