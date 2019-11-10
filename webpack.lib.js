const path = require("path");
const webpack = require("webpack");

module.exports = {
    context: process.cwd(),
    entry: {
        library: ["axios", "lodash", "react", "react-dom", "react-redux", "react-router-dom", "redux", "redux-thunk"]
    },
    output: {
        filename: "express_react_app.dll.js",
        path: path.resolve(__dirname, "./dist/lib"),
        library: "express_react_app"
    },
    plugins: [
        new webpack.DllPlugin({
            name: "express_react_app",
            path: path.resolve(__dirname, "./dist/lib/express_react_app.json")
        })
    ],
    resolve: {
        extensions: [".js", ".jsx", ".json", ".less", ".scss", ".css"],
        modules: [__dirname, "node_modules"]
    }
};
