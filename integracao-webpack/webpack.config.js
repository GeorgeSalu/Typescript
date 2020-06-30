const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/main.ts',
  output: {
    filename: 'app.min.js',
    path: path.join(__dirname, 'dist')
  },
  plugins: [
    new CopyPlugin([
      { from: 'public', to: '' }
    ])
  ],
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  }
}