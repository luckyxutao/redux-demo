const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['babel-preset-env'],
					},
				},
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
				}),
			},
		],
	},
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 9000,
		historyApiFallback: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html',
		}),
		new ExtractTextPlugin('styles.css'),
	],
};