const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: ["babel-polyfill", "./js/app.js",],
    output: {
        filename: "bundle.min.js",
        path: path.resolve(__dirname, "./dist")
    },
    watch: true,
    mode: "development",
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]

    },
    plugins: [
        new webpack.ProvidePlugin({
               process: 'process/browser',
        }),
    ],
   
}