var webpack = require('webpack'),
    path    = require('path'),
    fs      = require('fs');

var nodeModules = {}
fs.readdirSync(path.resolve(__dirname, 'node_modules'))
    .filter(x => ['.bin'].indexOf(x) === -1)
    .forEach(mod => { nodeModules[mod] = `commonjs ${mod}`; });

module.exports =[
  {
    name: 'server',
    entry: './server/express.js',
    output: {
      filename: './server/app.js'
    },
    target: 'node',
    module: {
      loaders: [
        {
          test: /\.js$/,
          loaders: ['react-hot', 'babel-loader']
        },
        {
          test:  /\.json$/,
          loader: 'json-loader'
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ]
  }
]
