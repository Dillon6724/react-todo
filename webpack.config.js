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
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ]
  }

  // //////////////////// SERVER /////////////////////
  // {
  //   name: 'server',
  //   target: 'node',
  //   entry: './server/express.js',
  //   output: {
  //     path: './build',
  //     filename: './server/app.js'
  //   },
  //   externals: nodeModules,
  //   module: {
  //     loaders: [
  //       {
  //         test: /\.js$/,
  //         loaders: ['react-hot', 'babel-loader']
  //       },
  //       {
  //         test:  /\.json$/,
  //         loader: 'json-loader'
  //       }
  //     ]
  //   },
  //   plugins: [
  //     new webpack.HotModuleReplacementPlugin(),
  //     new webpack.NoErrorsPlugin()
  //   ]
  // }
]
