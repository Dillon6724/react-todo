var webpack = require('webpack'),
    path    = require('path'),
    fs      = require('fs'),
    buildPath = path.resolve(__dirname, 'build');


var nodeModules = {}
fs.readdirSync(path.resolve(__dirname, 'node_modules'))
    .filter(x => ['.bin'].indexOf(x) === -1)
    .forEach(mod => { nodeModules[mod] = `commonjs ${mod}`; });


module.exports =[
  {
    name: 'react stuff',
    devtool: 'inline-source-map',
    entry: [
      'webpack-dev-server/client?http://127.0.0.1:8080/',
      'webpack/hot/only-dev-server',
      './src'
    ],
    output: {
      path: './public',
      filename: 'bundle.js'
    },
    resolve: {
      modulesDirectories: ['node_modules', 'src'],
      extensions: ['', '.js']
    },
    module: {
      loaders: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
        },
        {
          test: /\.(css|scss)$/,
          exclude: /node_modules/,
          loaders: ['style-loader', 'css-loader', 'sass-loader']
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ]
  }
]
