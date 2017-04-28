// Const
const webpack = require('webpack');

// Exporting
module.exports = {
    entry: './index.js',
    externals: {
        'expandjs': 'XP'
    },
    output: {
        filename: 'xp-monitor.js',
        path: './dist'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}, output: {comments: false}})
    ]
};
