var webpack = require("webpack");

module.exports = {
    entry: {
        'polyfills': './showcase/polyfills.js',
        'vendor': './showcase/vendor.js',
        'app': './showcase/boot.js'
    },
    output: {
        path: __dirname,
        filename: "./prod/[name].js"
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        })
    ]
};