var http = require("http");
var url = require("url");
var express = require('express');
var fs= require("fs");
var app = express();

function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    	//设置响应头
    response.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"})
	//请求的路由地址
	if(pathname == "/" || pathname=="/index"){
		fs.readFile("index.html",function(err,data){
			//设置响应头
			response.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
			//加载的数据结束
			response.end(data)
		})
	}
	else if(pathname === '/getUrl'){
            // 定义SQL语句
            // var options = { 
            //     hostname: '', 
            //     path: '', 
            //     method: 'GET' 
            // };    
            var req = http.request('http://wmstest.xianchengkeji.cn/index.php/api/dingding/ajax_getloginurl?mchid=6001', function (res) { 
                console.log('STATUS: ' + res.statusCode); 
                console.log('HEADERS: ' + JSON.stringify(res.headers)); 
                res.setEncoding('utf8'); 
                res.on('data', function (chunk) { 
                    response.write(chunk);
                    response.end();
                    console.log('BODY: ' + chunk); 
                }); 
            });
            req.on('error', function (e) { 
                console.log('problem with request: ' + e.message); 
            }); 

            req.end();
    }else{
        response.write("404 Not found");
        response.end();
    }
}


// app.post('',(req,res)=>{

// })

http.createServer(onRequest).listen(80);

console.log("Server has started.");