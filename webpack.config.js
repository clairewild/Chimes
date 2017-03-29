module.exports = {
  entry: "./lib/musicapp.js",
  output: {
    filename: "bundle.js"
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
          presets: ['es2015']
        }
      }
    ]
  },
  devtool: 'source-map',
};
