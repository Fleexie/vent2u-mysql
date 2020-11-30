"use strict";
var path = require('path');
module.exports = {
    entry: 'server.js',
    output: {
        filename: 'app.js',
        output: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
};
