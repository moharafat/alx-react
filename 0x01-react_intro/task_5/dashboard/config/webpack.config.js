const path = require('path');

module.exports = {
  mode: 'development', // Set this to 'production' for production builds
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Add support for both .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images/'
          }
        }
      }
    ]
  },
  devServer: {
    static: path.resolve(__dirname, '../dist'),
    hot: true,
    port: 8080
  },
  resolve: {
    extensions: ['.js', '.jsx'] // Add .jsx to the resolve extensions
  }
};
