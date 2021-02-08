const path = require("path");
const targets = ["ie 11"];

module.exports = {
    entry: "./src/index.tsx",
    mode: "production",
    resolve: {
        extensions: [".mjs", ".tsx", ".ts", ".jsx", ".js"],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                oneOf: [
                    {
                        test: /\.(ts|tsx|js|jsx)$/,
                        include: path.resolve(__dirname, "src"),
                        use: {
                            loader: "babel-loader",
                            options: {
                                presets: [
                                    [
                                        "@babel/preset-env",
                                        {
                                            targets: targets,
                                        },
                                    ],
                                    "@babel/preset-typescript",
                                    "@babel/preset-react",
                                ],
                                plugins: [
                                    [
                                        "polyfill-regenerator",
                                        {
                                            method: "usage-pure",
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                ],
            },
        ],
    },
};
