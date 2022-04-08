var con = require('./contect.js');

// query查询 (一个形参)
exports.__query1 = function(sqlStr,callback){
	let _config = con.connection;
	_config.query(sqlStr,function (err, result) {
		if(err){
		  callback(err.message)
		}
		callback(result)
	});
}

// query查询 (两个形参)
exports.__query2 = function(addSql,addSqlParams,callback){
	let _config = con.connection;
	_config.query(addSql,addSqlParams,function (err, result) {
		if(err){
		  callback(err.message)
		}
		callback(result)
	});
}

// 查表
exports.__select = function(dbname,paramObj) {
  var whereif = ' WHERE ';
  var and = 'and ';
  let dataArr = [];
  if(paramObj != null){
	  for(var key in paramObj){
		  if(key != ''){
			  if(whereif != ' WHERE '){
				  whereif = whereif + and + key + '=?'
			  }else{
				  whereif = whereif + key + '=?'
			  }
			  dataArr.push(paramObj[key]);
		  }
	  }
	  var  addSql = 'SELECT * FROM ' + dbname + whereif;
	  var  addSqlParams = dataArr;
	  return [addSql,addSqlParams];
  }else{
	  var sql = 'SELECT * FROM ' + dbname;
	  return sql;
  }
}

// 增表
exports.__insert = function(dbname,param) {
  let paramObj = param.data;
  let keyStr = '';
  let valStr = '';
  let dataArr = [];
  for(var key in paramObj){ 
	if(key != ''){
		keyStr = keyStr != '' ? keyStr + ',' + key : key;
		if(valStr != ''){
			if(key != param.primkey){
				valStr = valStr + ',' + '?'
			}else{
				valStr = valStr + ',' + '0'
			}
		}else{
			if(key != param.primkey){
				valStr = '?'
			}else{
				valStr = '0'
			}
		}
		if(key != param.primkey){
			dataArr.push(paramObj[key]);
		}
	}
  }
  var  addSql = 'INSERT INTO ' + dbname + '(' + keyStr + ') VALUES(' + valStr + ')';
  var  addSqlParams = dataArr;
  return [addSql,addSqlParams];
}

// 改表
exports.__update = function(dbname,param) {
  let paramObj = param.data;
  let keyStr = '';
  let valStr = '';
  let dataArr = [];
  for(var key in paramObj){ 
	if(key != ''){
		keyStr = keyStr != '' ? keyStr + ',' + key + '= ?' : key + '= ?';
		dataArr.push(paramObj[key]);
	}
  }
  if(param.unionkey != null){
	  let obj = param.unionkey;
	  let objkey = Object.keys(obj)[0];
	  valStr = objkey + '= ?';
	  dataArr.push(obj[objkey]);
  }
  var modSql = 'UPDATE ' + dbname + ' SET ' + keyStr + ' WHERE ' + valStr;
  var modSqlParams = dataArr;
  return [modSql,modSqlParams];
}


// 删表
exports.__delect = function(dbname,paramObj) {
  var whereif = ' WHERE ';
  var and = 'and ';
  if(paramObj != null){
  	  for(var key in paramObj){
  		  if(key != ''){
  			  if(whereif != ' WHERE '){
  				  whereif = whereif + and + key + '=' + paramObj[key]
  			  }else{
  				  whereif = whereif + key + '=' + paramObj[key]
  			  }
  		  }
  	  }
  	  var sql = 'DELETE FROM ' + dbname + whereif;
  	  return sql;
  }
}