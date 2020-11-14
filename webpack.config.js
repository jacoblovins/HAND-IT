var path = require('path');

module.exports = {
    mode: 'production',
    entry: './handGestures/HandGest.js',
    output: {
        path: path.resolve('lib'),
        filename: 'HandGest.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
}