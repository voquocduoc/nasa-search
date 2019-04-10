var webpack = require('webpack');

var environments = {
  development: {
    context: __dirname + '/src',
    entry: {
      javascript: './app.js',
      html: '../public/index.html',
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loaders: ['react-hot', 'babel']
        },
        {
          test: /\.html$/,
          loader: 'file?name=[name].[ext]',
        }
      ]
    },
    output: {
      filename: 'app.js',
      path: __dirname + '/public',
    },
    devServer: {
      port: 8000
    }
  },

  production: {
    context: __dirname + '/src',
    entry: {
      javascript: './app.js',
      html: '../public/index.html',
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loaders: ['babel'],
        },
        {
          test: /\.html$/,
          loader: 'file?name=[name].[ext]',
        }
      ]
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({minimize: true})
    ],
    output: {
      filename: 'app.js',
      path: __dirname + '/public',
    }
  }
}

module.exports = environments[process.env.NODE_ENV] || environments.development;
