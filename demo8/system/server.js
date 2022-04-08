var express = require('express');
var app = express();
var router = require('./router/index')

// 负责解析json
var querystring = require('querystring');

// 获取post请求参数
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extend:true}));
app.use(bodyParser.json());
 
// 设置静态文件
app.use(express.static('public')); 

 
// 把路由挂载到app服务器上
app.use(router)

// 将app对象形参传递过去 
var apiIndex = require("./api/common/index")
apiIndex(app);
 
 

 //配置服务端口
 var server = app.listen(3030,function(){
     var host = server.address().address == '::' ? '' : server.address().address;
     var port = server.address().port;
     console.log('Server run start  Please open http://127.0.0.1:' + port)
 })