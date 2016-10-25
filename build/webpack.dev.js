 var config = require('./webpack.base')
 var webpack = require('webpack')
 
 config.entry.app.unshift('./build/dev-client.js');

 config.plugins =  config.plugins.concat([
 	 new webpack.optimize.OccurrenceOrderPlugin(),
 	 new webpack.HotModuleReplacementPlugin(),
     new webpack.NoErrorsPlugin()
 	])


 module.exports = config 