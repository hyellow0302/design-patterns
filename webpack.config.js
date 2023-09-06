// /* adapter 실습예제 실행코드 */
// const path = require("path");
// module.exports = {
//   mode: "development",
//   entry: "./src/adapter/index.ts",
//   devtool: "inline-source-map",
//   module: {
//     rules: [
//       {
//         test: /\.tsx?$/,
//         use: "ts-loader",
//         exclude: /node_modules/,
//       },
//     ],
//   },
//   resolve: {
//     extensions: [".tsx", ".ts", ".js"],
//   },
//   output: {
//     filename: "bundle.js",
//     path: path.resolve(__dirname, "dist"),
//   },
// };

// /* bridge 실습예제 실행코드 */
// const path = require("path");
// module.exports = {
//   mode: "development",
//   entry: "./src/bridge/index.ts",
//   devtool: "inline-source-map",
//   module: {
//     rules: [
//       {
//         test: /\.tsx?$/,
//         use: "ts-loader",
//         exclude: /node_modules/,
//       },
//     ],
//   },
//   resolve: {
//     extensions: [".tsx", ".ts", ".js"],
//   },
//   output: {
//     filename: "bundle.js",
//     path: path.resolve(__dirname, "dist"),
//   },
// };

// /* composite 실습예제 실행코드 */
// const path = require("path");
// module.exports = {
//   mode: "development",
//   entry: "./src/composite/index.ts",
//   devtool: "inline-source-map",
//   module: {
//     rules: [
//       {
//         test: /\.tsx?$/,
//         use: "ts-loader",
//         exclude: /node_modules/,
//       },
//     ],
//   },
//   resolve: {
//     extensions: [".tsx", ".ts", ".js"],
//   },
//   output: {
//     filename: "bundle.js",
//     path: path.resolve(__dirname, "dist"),
//   },
// };

/* decorator 실습예제 실행코드 */
const path = require("path");
module.exports = {
  mode: "development",
  entry: "./src/decorator/index.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
