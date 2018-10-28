var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
// www.purgecss.com
const PurgecssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob-all')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: 'dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'vue-style-loader',
          use: 'css-loader?sourceMap'
        })
      },
      // {
      //   test: /\.css$/,
      //   use: [
      //     'vue-style-loader',
      //     'css-loader'
      //   ],
      // },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|pdf)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/[name].[hash].[ext]',
          publicPath: './dist/'
        }
      },
      {
        test: /\.(svg|ttf|woff|woff2|eot)$/, // font-awesome
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[hash].[ext]',
          publicPath: '../dist/'
        }
      }
    ]
  },
  plugins: [
    // ... Vue Loader plugin omitted
    new ExtractTextPlugin("build.css"),
    new PurgecssPlugin({
      paths: glob.sync([
        path.join(__dirname, './index.html'),
        path.join(__dirname, './src/App.vue'),
        path.join(__dirname, './src/main.js')
      ])
    })
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
