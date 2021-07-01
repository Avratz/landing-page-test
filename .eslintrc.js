module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'react-app',
		'plugin:react/recommended',
		'prettier',
    'plugin:prettier/recommended',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react','react-hooks'],
	rules: {
		'prettier/prettier': [
			'error',
			{
				printWidth: 100,
				trailingComma: 'all',
				tabWidth: 2,
				semi: false,
				singleQuote: true,
				useTabs: true,
				endOfLine: 'auto',
			},
		],
    "react-hooks/rules-of-hooks": "warn",
    "react-hooks/exhaustive-deps": "warn",
	},
}
