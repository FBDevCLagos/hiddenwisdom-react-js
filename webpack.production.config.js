var path = require('path'),
    webpack = require('webpack');

module.exports = {
    devtool: 'source-map',

    entry: [
        path.join(__dirname, 'app', 'js', 'app.js')
    ],

    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
        publicPath: '/build/'
    },

    plugins: [

    ],

    module: {
        loaders: [
        ]
    }
}