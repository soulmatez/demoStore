
// 接口api
var UserApi = require('../User')

module.exports = function (app) {
	
     app.get('/getUserList',function(req,res){           //配置接口api
     	 UserApi.findApi(req.query,function(err,data){
     		 if(err){
     			 return res.status(500).send('server err')
     		 }
     		 res.status(200),
     		 res.json(data)
     	 })
     })
     
     app.post('/editUserInfo',function(req,res){           //配置接口api
     	 UserApi.editApi(req.body,function(err,data){
     		 if(err){
     			 return res.status(500).send('server err')
     		 }
     		 res.status(200),
     		 res.json(data)
     	 })
     })
     
     app.post('/delUserInfo',function(req,res){           //配置接口api
     	 UserApi.delApi(req.body,function(err,data){
     		 if(err){
     			 return res.status(500).send('server err')
     		 }
     		 res.status(200),
     		 res.json(data)
     	 })
     })
	 
	 app.get('/testCros',function(req,res){           //配置接口api
	 	 UserApi.findApi(req.query,function(err,data){
	 		 if(err){
	 			 return res.status(500).send('server err')
	 		 }
	 		 res.status(200);
	 		 // res.json(data)
			 res.end('func(' + JSON.stringify(data) + ')');
	 	 })
	 })
}