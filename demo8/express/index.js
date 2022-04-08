var express = require('express');
var url = require('url');
var fs = require('fs');
var _type = require('./util/type').type;
var app = express();
 
//  主页输出 "Hello World"
app.get('/', function (req, res) {
   console.log("主页 GET 请求");
   res.send('Hello GETasdaa');
})
 

app.get('/index.html', function (req, res) {
	var pathname = req.url;
   // 从文件系统中读取请求的文件内容
   fs.readFile(pathname.substr(1), function (err, data) {
      if (err) {
         res.writeHead(404, {'Content-Type': 'text/html'});
      }else{        
   		 var ext = pathname.substring(pathname.lastIndexOf('.') + 1);   //得到文件后缀名
   		 var ContentType = {'Content-Type': _type[ext] || 'unknow'}; 
         // HTTP 状态码: 200 : OK
         // Content Type: text/html
         res.writeHead(200, ContentType);  
         // 响应文件内容
         res.write(data.toString());        
      }
      //  发送响应数据
      res.end();
   });   
})
 
//  POST 请求
app.post('/', function (req, res) {
   console.log("主页 POST 请求");
   res.send('Hello POST');
})
 
//  /del_user 页面响应
app.get('/del_user', function (req, res) {
   console.log("/del_user 响应 DELETE 请求");
   res.send('删除页面');
})
 
//  /list_user 页面 GET 请求
app.get('/list_user', function (req, res) {
   console.log("/list_user GET 请求");
   res.send('用户列表页面');
})
 
// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', function(req, res) {   
   console.log("/ab*cd GET 请求");
   res.send('正则匹配');
})
 
 
var server = app.listen(8081, function () {
 console.log(server.address())
  var host = server.address().address != '::' || '127.0.0.1'
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})