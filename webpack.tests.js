module.exports = {
  devtool: 'eval',
  entry: {
    app: ['./tests.bundle.js']
  },
  output: {
    path: './spec',
    filename: 'all_specs.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
    ]
  }
};

