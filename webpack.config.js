const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: path.join(__dirname, 'src/main.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        open: true,
        contentBase:'src',
        port: 3000,
        hot: true
    },

    //安装html-webpack-plugin时写的
    // module: {
    //     rules: [{
    //         test: /\.txt$/,
    //         use: 'raw-loader'
    //     }]
    // },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/index.html'),
            filename: 'index.html'
        }),
    ],

    //安装vue-loader
    module: {
        rules: [
          // ... 其它规则
          {test: /\.vue$/,loader: 'vue-loader'},
          //loader
          { test: /\.css$/, use: ['style-loader','css-loader'] },
          { test: /\.vue$/, loader:'vue-loader' }
        ]
      },
    plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin()
    ]
}