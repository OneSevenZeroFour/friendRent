var express = require("express");
//var bodyParser = require("body-parser")
var mysql = require("mysql");

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'you'
});

connection.connect();

var app = express();

app.get('/select', function(req, res) {
	res.append("Access-Control-Allow-Origin", "*")

	var sql= 'select tel from user where tel =' + req.query.tel;
	connection.query(sql, function(error, results, fields) {
		if(error) throw error;

		if(results[0]===undefined){
			res.send("fail")
		}else{
			res.send("ok")
		}
		
	});

})
//新注册
app.get('/insert', function(req, res) {
	res.append("Access-Control-Allow-Origin", "*")
	//先查询有没有同样的手机号码
	var sql= 'select tel from user where tel =' + req.query.tel;
	connection.query(sql, function(error, results, fields) {
		if(error) throw error;
		if(results[0]===undefined){
			//没有查询到手机的情况下就插入数据,有的话就什么都不操作,防止多次插入
			connection.query(`insert  into user (tel,password) values ("${req.query.tel}","${req.query.password}")`, function(error, results, fields) {
				if(error) throw error;
				res.send("ok")
			});
		}
	});
	
})
//登录
app.get('/login', function(req, res) {
	res.append("Access-Control-Allow-Origin", "*")
	//先查询有没有同样的手机号码
	var tel = req.query.tel ? req.query.tel : '';
	var password = req.query.password ? req.query.password : '';
	var sql = `select * from user where tel="${tel}" and password="${password}"`;
	connection.query(sql, function(error, results, fields) {
			if(error) throw error;
			if(results[0] == undefined) {
				res.send("fail")
			} else {
				res.send("ok")
			}
		});
	
})


app.listen(12345);
console.log('服务器启动')