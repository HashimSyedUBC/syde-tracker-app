module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "linebreak-style": 0,
    "max-len": "off",
    "import/extensions": "off",
    "import/prefer-default-export": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "react/jsx-filename-extension": [1, { extensions: [".tsx", ".jsx"] }],
    "react/function-component-definition": "off",
    "react/button-has-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "react/require-default-props": "off",
    "consistent-return": "off",
    "react/no-array-index-key": "off",
    "react/jsx-one-expression-per-line": "off",
    "array-callback-return": "off",
  },
};
