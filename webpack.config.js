const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: './src/app.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },

    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
				use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['babili', 'es2015', 'es2017'],
                            plugins: [
                                ["transform-class-properties", { "spec": true }]
                            ]
                        }
                    }
                ]
            },
            {
				test: /\.styl$/,
				loader: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            'css-loader?url=false',
                            {
                                loader: 'postcss-loader',
                                options: {
                                    plugins: () => [ require('autoprefixer')('last 2 versions') ]
                                }
                            },
                            'stylus-loader'
                        ]
                    }
                )
			}
        ]
    },
    
   plugins: [
        new ExtractTextPlugin({
            filename: ('styles.css')
        })
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false,
        //         screw_ie8: true,
        //         conditionals: true,
        //         unused: true,
        //         comparisons: true,
        //         sequences: true,
        //         dead_code: true,
        //         evaluate: true,
        //         if_return: true,
        //         join_vars: true
        //     },
        //     output: {
        //         comments: false
        //     }
        // }),
        // new webpack.HashedModuleIdsPlugin(),
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': JSON.stringify('production')
        // }),
        // new webpack.optimize.ModuleConcatenationPlugin()
    ],

    devServer: {
		inline: true,
		contentBase: './public',
		port: 5050,
		host: '0.0.0.0'
    },

    devtool: 'cheap-eval-source-map',
    // devtool: 'cheap-module-source-map',
    
    resolve: {
        extensions: ['.js', '.jsx', '.json', '*']
    }
};