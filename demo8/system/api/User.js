var fs = require('fs');
var dbUserPath = '../system/data/user.json';

exports.findApi =function(param,callback){
    fs.readFile(dbUserPath,'utf8',function(err,data){
        if(err){
            return callback(err)
        }
       callback(null,JSON.parse(data).InforJson)
    })
}

exports.editApi =function(param,callback){
    fs.readFile(dbUserPath,'utf8',function(err,data){
        if(err){
            return callback(err)
        }
       var users = JSON.parse(data).InforJson
	   if(param.id != '' ){
		   var _editKey = users.findIndex(function(item){
			return item.id == parseInt(param.id)
		   })
		   users[_editKey] = param
	   }else{
		   if(users.length != 0 && users[users.length - 1].id){
			   param.id = parseInt(users[users.length - 1].id) + 1
		   }else{
			   param.id = 1
		   }
		   users.push(param)
	   }
	   
       var fileData = JSON.stringify({
           InforJson:users
       })
       fs.writeFile(dbUserPath,fileData,function(err){
            if(err){
                return callback(err)
            }
            fs.readFile(dbUserPath,'utf8',function(err,data){
				if(err){
				    return callback(err)
				}
				callback(null,JSON.parse(data).InforJson)
			})
       })
    })
}



exports.delApi =function(param,callback){
    fs.readFile(dbUserPath,'utf8',function(err,data){
        if(err){
            return callback(err)
        }
       var users = JSON.parse(data).InforJson
	   var detleteId = users.findIndex(function(item){
		   return item.id == parseInt(param.id)
	   })
	   users.splice(detleteId,1)
       var fileData = JSON.stringify({
           InforJson:users
       })
       fs.writeFile(dbUserPath,fileData,function(err){
            if(err){
                return callback(err)
            }
            fs.readFile(dbUserPath,'utf8',function(err,data){
				if(err){
				    return callback(err)
				}
				callback(null,JSON.parse(data).InforJson)
			})
       })
    })
}