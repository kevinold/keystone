// This file exports the common packages required by the Admin UI.
//
// It is used to build /public/js/packages.js, and exclude these packages from
// the Admin UI bundle generated by browserify.
module.exports = [
	'async',
	'blacklist',
	'bytes',
	'classnames',
	'elemental',
	'history',
	'i',
	'list-to-array',
	'marked',
	'moment',
	'numeral',
	'react-addons-css-transition-group',
	'react-alt-text',
	'react-day-picker',
	'react-dom',
	'react-select',
	'react',
	'store-prototype',
	'superagent',
	'underscore',
	'vkey',
	'xhr',
];
