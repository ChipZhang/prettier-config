module.exports = {
	useTabs: true,
	tabWidth: 4,
	endOfLine: 'lf',
	printWidth: 120, // not a hard strict, may exceed this limit for some lines
	semi: false,
	trailingComma: 'all',
	bracketSpacing: false,
	singleQuote: true,
	quoteProps: 'consistent',
	jsxSingleQuote: true,
	jsxBracketSameLine: false, // for multi-line JSX element
	arrowParens: 'always',

	overrides: [
		// without this, *.md files will result in `-   text`
		{
			files: ['*.md'],
			options: {useTabs: false, tabWidth: 2},
		},
	],
}
