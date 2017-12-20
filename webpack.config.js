var path = require('path');

module.exports = {
    entry: {
       app: "./src/js/app.js",
       vendor: "./src/js/vendor.js"
    },
    output: {
        path: path.resolve(__dirname, "./src/temp/scripts"),
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['env']
                },
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
}