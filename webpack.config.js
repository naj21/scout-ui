const path = require('path');
const webpack  = require('webpack');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: { presets: ['@babel/env'] }
            },
            {
                test: /\.(css|s[ac]ss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    resolve: { extensions: ['*', '.js', '.jsx'] },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'public/'),
        port: '3005',
        publicPath: 'http://localhost:3005/dist/',
        //enable hot reload
        hotOnly: true,
        historyApiFallback: true
    },
    //module for hot reload
    plugins: [new webpack.HotModuleReplacementPlugin()]
}