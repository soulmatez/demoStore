/**
 * router.js 路由模块
 * 职责：
 * 处理路由，根据不同的请求方法请求路径设置不同的结果
 */
   var express = require('express')
   var router = express.Router()
   
   
   // 设置跨域
   router.all('*', function(req, res, next) {             //设置跨域访问
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "X-Requested-With");
		res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
		res.header("X-Powered-By",' 3.2.1');
		res.header("Content-Type", "application/json;charset=utf-8");
		next();
   });
   
   router.get('/',function(req,res){
	   console.log('我进首页了')
   })
   
   router.get('/on',function(req,res){
   	   res.send('/on.html')
   })
   
   //中间代码是跳转到不同路由进行的操作
   module.exports = router