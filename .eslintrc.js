module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: ["plugin:vue/essential", "eslint:recommended", "plugin:prettier/recommended"],
	parserOptions: {
		parser: "@babel/eslint-parser",
	},
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
		"vue/multi-word-component-names": 0,
		"prettier/prettier": [
			"error",
			{
				printWidth: 120,
				semi: true,
				useTabs: true,
				tabWidth: 2,
				bracketSpacing: true,
				arrowParens: "avoid",
				trailingComma: "all",
				singleQuote: false,
			},
		],
	},
	overrides: [
		{
			files: ["**/__tests__/*.{j,t}s?(x)", "**/tests/unit/**/*.spec.{j,t}s?(x)"],
			env: {
				jest: true,
			},
		},
	],
};
