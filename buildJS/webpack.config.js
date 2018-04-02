const path = require("path");//gammalt modulformat
const CleanWebpackPlugin = require('clean-webpack-plugin'); //tömmer build

module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/build'),
        publicPath: "build"
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },

    resolve: {
        extensions: ['.js']
    },

    plugins: [
        new CleanWebpackPlugin(['public/build'])
    ],

    devServer: {
        port: 3000,
        contentBase: './public',
        compress: true,
        historyApiFallback: true,
    },
};