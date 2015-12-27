'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV || 'development';
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const PARAMS = {};

function extractForProduction(loaders) {
	return ExtractTextPlugin.extract('style', loaders.substr(loaders.indexOf('!')));
}

let cssLoaders = 'style!css?localIdentName=[hash:base64]';
let stylusLoaders = `${cssLoaders}!stylus`;

cssLoaders = extractForProduction(cssLoaders);
stylusLoaders = extractForProduction(stylusLoaders);

if (NODE_ENV === 'production') {
	PARAMS.LIBS_ALIASES = {
		react: `${__dirname}/node_modules/react/dist/react.min.js`,
		'react-dom': `${__dirname}/node_modules/react-dom/dist/react-dom.min.js`
	}
	PARAMS.watch = false;
	PARAMS.FOLDER = `${__dirname}/build`;
} else {
	PARAMS.sourceMap = 'inline-source-map';
	PARAMS.watch = true;
	PARAMS.FOLDER = `${__dirname}/deploy`;
}

module.exports = {
	entry: './src/ts/main.ts',
	output: {
		path: PARAMS.FOLDER,
		filename: 'app.js'
	},
	resolve: {
		modulesDirectories: ['node_modules'],
		extensions:         ['', '.js', '.ts', '.tsx'],
		alias: Object.assign({
			///libs
		}, PARAMS.LIBS_ALIASES)
	},
	watch: PARAMS.watch,
	module: {
		loaders: [
			{
				test: /\.tsx?$/,
				loader: 'ts',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				loader: cssLoaders
			},
			{
				test: /\.styl$/,
				loader: stylusLoaders
			},
			{
	          test: /\.(png|svg|jpg|gif)$/,
	          loader: "file",
	        }
		],
	},
	devtool: PARAMS.sourceMap,
	noParse: [/react\.min\.js/, /react-dom\.min\.js/],
	plugins: [
		new HtmlWebpackPlugin({
	        template: './src/index.html',
			minify: {
				//removeComments: true
			}
		}),
		new ExtractTextPlugin("app.[hash].css")
  	],
	devServer: {
		host: 'localhost',
		post: 8080
	}
};


if (NODE_ENV === 'production') {
  module.exports.plugins.push(
	  new webpack.optimize.UglifyJsPlugin({
		compress: {
			// don't show unreachable variables etc
			warnings:     false,
			drop_console: true,
			unsafe:       true
		}
	  })
  );
}
