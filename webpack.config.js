var path = require('path')
var config = require('config')
var webpack = require('webpack');
var mode, entry, output, plugins, rules;

if (process.env.NODE_ENV !== 'production') {
    mode = 'development'
    entry = './src/index.js'
    output = {
        path: path.join(__dirname, [ '/', config.get('buildDirectory') ].join('')),
        filename: '[name].bundle.js',
        publicPath: 'http://localhost:3001/'
    }
    plugins = [
        new webpack.DefinePlugin({ __DEV__: true }),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
      ]
    rules = [
        { 
            test: /\.(js|jsx)$/, 
            loader: 'babel-loader',
            exclude: /node_modules/,
        }
    ]
}else{
    mode = 'production'
    entry = {
        main: './src/index.js'
    }
    output = {
        path: path.join(__dirname, [ '/', config.get('buildDirectory') ].join('')),
        filename: '[name].bundle.js'
    }
    plugins = [
        new webpack.DefinePlugin({ __DEV__: false, 'process.env.NODE_ENV': "'production'" })
      ];
    rules = [
        { 
            test: /\.(js|jsx)$/, 
            loader: 'babel-loader',
            options: {
                babelrc: false,
                comments: false,
                presets: [
                  'env',
                  'react',
                ],
              },
              exclude: /node_modules/,
              include: __dirname
        },
    ]
}

module.exports = {
    devtool: 'source-map',
    mode: mode,
    entry: entry,
    output: output,
    module: {
      rules: rules,
    },
  }
