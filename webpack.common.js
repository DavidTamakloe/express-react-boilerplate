const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: {
        backoffice: "./src/client/backoffice/index.js"
    },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "[name]/bundle.js"
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /\node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(less|css)$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: function() {
                                return [require("autoprefixer")];
                            }
                        }
                    },
                    { loader: "less-loader" }
                ]
            },
            {
                test: /\.(png|jp(e?)g|gif|svg)$/i,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8192,
                            name: "/assets/images/[hash].[ext]"
                        }
                    }
                ]
            },
            {
                test: /\.(mp3|wav|ogg)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            publicPath: "/assets/audio",
                            outputPath: "./assets/audio"
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ["file-loader"]
            }
        ]
    },
    plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require("./dist/lib/express_react_app.json")
        })
    ],
    resolve: {
        extensions: [".js", ".jsx", ".scss"]
    }
};
