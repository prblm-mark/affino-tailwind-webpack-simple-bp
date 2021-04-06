const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },

      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          // 'style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1 },
          },
          'postcss-loader',
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }), // Generates default index.html
    new HtmlWebpackPlugin({
      filename: 'online-users.html',
      template: 'src/online-users.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'recent.html',
      template: 'src/recent.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'favourites.html',
      template: 'src/favourites.html',
    }),
    new MiniCssExtractPlugin({ filename: 'css/style.css' }),
  ],

  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
  },

};
