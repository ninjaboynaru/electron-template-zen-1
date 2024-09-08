import type { Configuration } from 'webpack'
import path from 'path'

import { rules } from './webpack.rules'
import { plugins } from './webpack.plugins'

rules.push({
	test: /\.scss$/,
	use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'postcss-loader' }, { loader: 'sass-loader' }],
})

export const rendererConfig: Configuration = {
	module: {
		rules,
	},
	plugins,
	resolve: {
		extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
		alias: {
			'@': path.resolve(__dirname, './src')
		},
	},
}
