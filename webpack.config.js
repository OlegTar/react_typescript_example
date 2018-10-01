const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: "development", // "production" | "development" | "none"  // Chosen mode tells webpack to use its built-in optimizations accordingly.
  entry: "./app/index.tsx", // string | object | array  // defaults to ./src  
  output: {
    path: path.resolve(__dirname, "dist"), // string
    filename: "bundle.js", // string    // the filename template for entry chunks
  },
  module: {
    rules: [
        // rules for modules (configure loaders, parser options, etc.)
        {
          test: /\.tsx?$/,
          include: [
            path.resolve(__dirname, "app")
          ],
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"]
          },
          // options for the loader
        },
    ],    
  },
  resolve: {
    // options for resolving module requests
    // (does not apply to resolving to loaders)
    modules: [
      "node_modules",
      path.resolve(__dirname, "app")
    ],
    // directories where to look for modules
    extensions: [".js", ".json", ".jsx", ".css", ".tsx"],
    // extensions that are used
  },
  plugins: [
    new webpack.ProvidePlugin({
        "React": "react",
    }),
],
}