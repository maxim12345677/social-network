// Common eslint rules start

const commonRules = {
  // a11y rules start
  "jsx-a11y/no-static-element-interactions": "off",
  "jsx-a11y/click-events-have-key-events": "off",
  "jsx-a11y/label-has-for": "off",
  "jsx-a11y/anchor-is-valid": [
    "error",
    {
      components: ["Link"],
      specialLink: ["hrefLeft", "hrefRight"],
      aspects: ["invalidHref", "preferButton"],
    },
  ],
  // a11y rules end

  // react rules start
  "react-hooks/rules-of-hooks": "error",
  "react-hooks/exhaustive-deps": "off",
  "react/jsx-filename-extension": [
    "error",
    { extensions: [".js", ".jsx", ".tsx", "ts"] },
  ],
  "react/button-has-type": "off",
  "react/jsx-key": "error",
  "react/jsx-props-no-spreading": "off",
  "react/function-component-definition": [
    "error",
    {
      namedComponents: "arrow-function",
      unnamedComponents: "arrow-function",
    },
  ],
  "react/forbid-prop-types": "off",
  // react rules end

  // import rules start
  "import/no-unresolved": "off",
  "import/extensions": [
    "error",
    "ignorePackages",
    {
      "": "never",
      js: "never",
      jsx: "never",
      ts: "never",
      tsx: "never",
    },
  ],
  "import/no-extraneous-dependencies": [
    "error",
    {
      devDependencies: ["**/*.stories.*", "**/.storybook/**/*.*"],
      peerDependencies: true,
    },
  ],
  "import/order": "off",
  "simple-import-sort/imports": [
    "warn",
    {
      groups: [
        // Packages `react` and `next` related packages come first.
        ["^react", "^next", "^@?\\w"],
        // Files from common and store
        ["(.*(?:/(common|store|rest)).*)"],
        // Internal packages.
        ["^(@.*)(/.*|$)", "(components)(/.*|$)"],
        // Side effect imports.
        ["^\\u0000"],
        // Parent imports. Put `..` last.
        ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
        // Other relative imports. Put same-folder imports and `.` last.
        ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$", "^.+\\.?(css)$"],
      ],
    },
  ],
  "no-restricted-imports": [
    "error",
    {
      paths: ["lodash", "react-use", "date-fns"],
    },
  ],
  // import rules end

  "no-console": "error",
  "no-prototype-builtins": "off",
  "no-plusplus": "off",
  "no-unused-vars": [
    "error",
    {
      varsIgnorePattern: "React",
      ignoreRestSiblings: true,
    },
  ],
  "prefer-destructuring": "warn",
  "max-lines-per-function": ["error", { max: 300, skipBlankLines: true }],
  "padding-line-between-statements": [
    "error",
    {
      blankLine: "always",
      prev: "*",
      next: ["return", "try", "switch", "throw"],
    },
    {
      blankLine: "always",
      prev: ["function", "expression"],
      next: "if",
    },
    {
      blankLine: "always",
      prev: ["if"],
      next: ["function", "expression", "const", "let"],
    },
    { blankLine: "always", prev: ["const", "let"], next: "*" },
    { blankLine: "any", prev: ["const", "let"], next: ["const", "let"] },
  ],
};
// Common rules end

// Main config start
module.exports = {
  parser: "babel-eslint",
  extends: [
    "airbnb",
    "airbnb/hooks",
    "prettier",
    "prettier/react",
    "plugin:react/jsx-runtime",
  ],
  plugins: ["simple-import-sort"],
  globals: {
    Modernizr: true,
  },
  env: {
    browser: true,
    node: true,
  },
  rules: commonRules,
  overrides: [
    {
      // Typescript rules start
      files: ["**/*.ts", "**/*.tsx"],
      parser: "@typescript-eslint/parser",
      extends: [
        "airbnb",
        "airbnb/hooks",
        "prettier",
        "prettier/react",
        "plugin:react/jsx-runtime",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
      ],
      rules: {
        ...commonRules,
        "react/prop-types": "off",
        "react/require-default-props": "off",
        "no-use-before-define": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/ban-types": [
          "error",
          {
            types: {
              FC: "Вместо React.FC нужно использовать типизацию пропсов в компоненте",
              "React.FC":
                "Вместо React.FC нужно использовать типизацию пропсов в компоненте",
            },
          },
        ],
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            varsIgnorePattern: "React",
            ignoreRestSiblings: true,
          },
        ],
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": ["error"],
      },
      // Typescript rules end
    },
    {
      files: ["*.stories.jsx", "*.tsx"],
      rules: {
        "react/prop-types": "off",
        "react/destructuring-assignment": "off",
      },
    },
    {
      files: ["./pages/_app.tsx", "./pages/_document.tsx"],
      rules: {
        "simple-import-sort/imports": "off",
        "react/no-danger": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
      },
    },
  ],
};
