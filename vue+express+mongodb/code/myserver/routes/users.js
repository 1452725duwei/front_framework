var express = require('express');
var mongoose = require('mongoose');//导入mongoose模块

var Users = require('../modules/users');//导入模型数据模块

var router = express.Router();

/* GET users listing. */
//router.get('/', function(req, res, next) {
//res.send('respond with a resource');
//});

//查询所有用户数据
router.get('/', function(req, res, next) {
	console.log(req.query);
	var pageNum=req.query.pageNum;
	var pageSize=parseInt(req.query.pageSize);
    Users.find(function(err, users) {
        if(err) {
            console.log(err);
        } 
        console.log(users);
           	res.setHeader("Access-Control-Allow-Origin", "*");
			res.json(users);
//      res.render('users',{title: '用户列表', users: users})  //这里也可以json的格式直接返回数据res.json({data: users});
    }).sort({"id":1}).skip(pageSize*pageNum).limit(pageSize)
})
module.exports = router;