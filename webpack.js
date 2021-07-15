const devMode = process.env.NODE_ENV !== "production";
const webpack = require("webpack");
const path = require("path");

const scriptsConfig = {
    mode: devMode ? "development" : "production",
    entry: "./src/assets/js/index.js",
    output: {
        filename: 'bundle.js',
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: path.resolve(path.join(__dirname, "node_modules/jquery")),
            jQuery: path.resolve(path.join(__dirname, "node_modules/jquery")),
            "window.jQuery": path.resolve(
              path.join(__dirname, "node_modules/jquery")
            ),
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        presets: ["@babel/preset-env"],
                        sourceType: "unambiguous",
                        plugins: ["@babel/plugin-proposal-optional-chaining", "@babel/transform-runtime"]
                    },
                },
            }
        ],
    }
}

module.exports = { scriptsConfig };