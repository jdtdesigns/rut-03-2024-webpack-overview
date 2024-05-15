const path = require('path')
const is_prod = process.env.NODE_ENV === 'production'

const HtmlWebpackPlugin = require('html-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')

const productionPlugins = [
  new WorkboxPlugin.GenerateSW({
    // these options encourage the ServiceWorkers to get in there fast
    // and not allow any straggling "old" SWs to hang around
    clientsClaim: true,
    skipWaiting: true,
  }),

  new WebpackPwaManifest({
    name: 'Webpack First Website',
    short_name: 'WPFW',
    description: 'Our first Webpack PWA Website!',
    background_color: '#555',
    publicPath: '/',
    theme_color: '#fff',
    ios: true,
    crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
    icons: [
      {
        src: path.resolve('src/images/logo.png'),
        sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
      },
      {
        src: path.resolve('src/images/logo.png'),
        size: '1024x1024',
        purpose: 'maskable'
      }
    ]
  })
]

const plugins = [
  new HtmlWebpackPlugin({
    template: './index.html'
  })
]

if (is_prod) {
  plugins.push(...productionPlugins)
}

module.exports = {
  entry: './src/index.js',

  mode: process.env.NODE_ENV,

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'output'),
  },

  plugins: plugins,

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'output'),
    },
    compress: true,
    hot: true,
    port: 8080,
    proxy: [
      {
        context: ['/'],
        target: 'http://localhost:3333',
        secure: false
      }
    ],
    watchFiles: {
      paths: ['./index.html']
    }
  },
};