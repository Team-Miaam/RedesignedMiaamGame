module.exports = {
	mode: 'development',
	target: 'web',
	entry: {
		index: './index.js',
	},
	watch: true,
	watchOptions: {
		ignored: '/node_modules/',
	},
};
