const path = require("path");

module.exports = {
  entry: {
    "accessibility-widget": "./src/accessibility-widget.ts",
    navbar: "./src/navbar.ts",
    carousel: "./src/carousel.ts",
    container: "./src/container.ts",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "public/assets/js"), // ⬅️ hasil build ke sini
    assetModuleFilename: "../img/[name][hash][ext]",
    clean: true,
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      // Tangani .cur pakai asset/resource karena tidak bisa inline
      {
        test: /\.cur$/i,
        type: "asset/inline",
        generator: {
          dataUrl: (content) => {
            return `data:application/octet-stream;base64,${content.toString(
              "base64"
            )}`;
          },
        },
      },
      // Gambar & font lain inline
      {
        test: /\.(png|jpe?g|gif|svg|ttf)$/i,
        type: "asset/inline",
      },
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    static: [
      path.resolve(__dirname, "public"), // ⬅️ serve HTML dari sini
    ],
    port: 9000,
    open: true,
  },
  mode: "development",
};
