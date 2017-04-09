module.exports = {
  entry: "./frontend/entry.jsx",
  output: {
    filename: "./bundle.js"
  },
  resolve: {
    extensions: [".js", "*" ]
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
};
