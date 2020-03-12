const path = require("path");
const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [postcssPresetEnv({ browsers: "last 2 versions" })]
            }
          }
        ]
      },
      {
        test: /\.csv$/,
        loader: "csv-loader",
        options: {
          dynamicTyping: true,
          header: true,
          skipEmptyLines: true
        }
      }
    ]
  },
  devServer: {
    contentBase: [
      path.join(__dirname, "dist"),
      path.join(__dirname, "data"),
      path.join(__dirname, "public")
    ],
    compress: true,
    port: 9000
  }
};
