var mysql = require('mysql');
var dbquery = require('./query.js')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'nodesql'
});
connection.connect();

// 把connection变量抛出去
exports.connection = connection;



// 查

// 无条件
// let sqlStr = dbquery.__select('websites');
// dbquery.__query1(sqlStr,callback);
// 条件
// let sqlArr = dbquery.__select('websites',{name:"修改菜鸟工具",id:1});
// dbquery.__query2(sqlArr[0],sqlArr[1],callback);


// 增
// let param = {
// 	primkey: 'Id',
// 	data:{
// 		Id : 0,
// 		name : '菜鸟工具',
// 		url : 'https://c.runoob.com',
// 		alexa : '23253',
// 		country : 'CN'
// 	}
// };

// let sqlArr = dbquery.__insert('websites',param);
// dbquery.__query2(sqlArr[0],sqlArr[1],callback);

// 改
let param = {
	unionkey: {
		id : 3
	},
	data:{
		name : '大菜鸟',
		country : 'EN'
	}
};

let sqlArr = dbquery.__update('websites',param);
dbquery.__query2(sqlArr[0],sqlArr[1],callback);

// 删
// let sqlStr = dbquery.__delect('websites',{id:6});
// dbquery.__query1(sqlStr,callback);

// 数据库链接结束
connection.end();


function callback(res){
	console.log(res)
	return res
}