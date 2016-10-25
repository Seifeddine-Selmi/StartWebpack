var webpack = require('webpack')
var config = require('./webpack.dev.js')
var webpackDevServer = require('webpack-dev-server')
var chokidar = require('chokidar')
var port = 8080;

//config.entry.app.unshift("webpack-dev-server/client?http://localhost:"+port+"/", "webpack/hot/dev-server");

var compiler = webpack(config);
var hotMiddleware = require('webpack-hot-middleware')(compiler)


chokidar.watch('./*.html').on('all', function(path){
 
    hotMiddleware.publish({action:'reload'})

})


var server = new  webpackDevServer(compiler, {
	hot:true,
	/*proxy:{

		"*":{
			target:"http://selmi.meximas.com/",
			changeOrigin:true
		}
	},*/
	contentBase:'./',
	quiet:false,
	noInfo:false,
	publicPath: config.output.publicPath,
	stats: {colors:true}

});

server.use(hotMiddleware)

server.listen(port, function(err){
	 if(err){
	     console.log('Error : ' + err)
	 }else{
	 	 console.log('Listen : ' + port)
	 }

})
