const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
        ]
    },
    plugins: [
    new CopyPlugin({
            patterns : [
                {from: "src/assets/vendor/bootstrap/css/bootstrap.min.css", to : path.resolve('dist/src/assets/vendor/bootstrap/css/bootstrap.min.css')},
                {from: "src/assets/vendor/fontawesome-free/css/all.min.css", to : path.resolve('dist/src/assets/vendor/fontawesome-free/css/all.min.css')},
                {from: "src/assets/fonts/", to : path.resolve('dist/src/assets/fonts/')},
                {from: "src/assets/css/agency.min.css", to : path.resolve('dist/src/assets/css/agency.min.css')},

            ]
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        })
        
    ]
}