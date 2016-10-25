 var config = require('./webpack.base')
 var webpack = require('webpack')
 var ExtractTextPlugin = require("extract-text-webpack-plugin")
 var extractCss = new ExtractTextPlugin("bundle.css");

 config.plugins =  config.plugins.concat([
     extractCss,
     new webpack.optimize.UglifyJsPlugin({    
       	   comments:false                       
       })
 	])

 var cssLoaders =  config.module.loaders[0].loaders
 config.module.loaders[0].loaders = null
 config.module.loaders[0].loader = extractCss.extract(cssLoaders.slice(1, cssLoaders.length ))

 module.exports = config