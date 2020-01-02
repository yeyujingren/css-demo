const path = require('path');
module.exports = {
	entry: "./src/index.js",
	output: {
		publicPath: "/",
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
    rules: [{
      test: /\.scss$/,
      use: [{
          loader: "style-loader"
      }, {
          loader: "css-loader"
      }, {
          loader: "sass-loader"
      }]
    }]
  }
}