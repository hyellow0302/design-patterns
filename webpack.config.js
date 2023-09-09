const path = require("path");
module.exports = {
  mode: "development",
  // entry: "./src/adapter/index.ts", /* adapter 실습예제 실행코드 */
  // entry: "./src/bridge/index.ts", /* bridge 실습예제 실행코드 */
  // entry: "./src/composite/index.ts", /* composite 실습예제 실행코드 */
  // entry: "./src/decorator/index.ts", /* decorator 실습예제 실행코드 */
  entry: "./src/flyweight/index.ts" /* flyweight 실습예제 실행코드 */,
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
