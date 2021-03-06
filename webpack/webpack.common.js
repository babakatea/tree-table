const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const tsImportPluginFactory = require("ts-import-plugin");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const configureHtml = () => {
  return {
    title: "Tree table test task",
    filename: "index.html",
    template: path.resolve("templates", "webapp.html"),
    inject: true,
  };
};

module.exports = () => {
  const outputDir = path.join(__dirname, "../prod");

  return {
    target: "web",
    entry: "./app/bootstrap/main.ts",
    output: {
      path: path.join(outputDir),
      filename: path.join("js", "bundle.js"),
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)?$/,
          loader: "ts-loader",
          exclude: /node_modules/,
          options: {
            getCustomTransformers: () => ({
              before: [tsImportPluginFactory({style: "css"})],
            }),
          },
        },
        {
          test: /\.(eot|ttf|woff|woff2)$/,
          use: ["url-loader?limit=100000"],
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.less$/,
          use: ["style-loader", {loader: 'css-loader', options: {sourceMap: 1}}, "postcss-loader", "less-loader"]
        }
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: path.join("css/styles.css"),
      }),
      new HtmlWebpackPlugin(configureHtml()),
    ],
  };
};
