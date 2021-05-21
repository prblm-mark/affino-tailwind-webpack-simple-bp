const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    assetModuleFilename: 'img/[name][ext][query]',
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
        test: /\.png/,
        type: 'asset/resource',
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
      minify: {
        removeRedundantAttributes: false,
      },
    }), // Generates default index.html
    new HtmlWebpackPlugin({
      filename: 'online-users.html',
      template: 'src/online-users.html',
      minify: {
        removeRedundantAttributes: false,
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'recent.html',
      template: 'src/recent.html',
      minify: {
        removeRedundantAttributes: false,
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'favourites.html',
      template: 'src/favourites.html',
      minify: {
        removeRedundantAttributes: false,
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'charts.html',
      template: 'src/charts.html',
      minify: {
        removeRedundantAttributes: false,
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'article-listing.html',
      template: 'src/article-listing.html',
      minify: {
        removeRedundantAttributes: false,
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'article-form.html',
      template: 'src/article-form.html',
      minify: {
        removeRedundantAttributes: false,
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'article-edit.html',
      template: 'src/article-edit.html',
      minify: {
        removeRedundantAttributes: false,
      },
    }),
    new MiniCssExtractPlugin({ filename: 'css/style.css' }),
  ],

  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
  },

};
