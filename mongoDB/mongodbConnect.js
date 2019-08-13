// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/runoob";
 
// MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
//   if (err) throw err;
//   console.log("数据库已创建!");
//   db.close();
// });

var http = require('http');
var express = require('express');
var url = require('url');
var fs = require('fs');
var app = express();



// app.get("/:uname/:cc",(req,res) => {      // （冒号）：后面都是参数
//     var uname = req.params.uname;        //params是获取参数的方法，是一个类数组
//     var cc = req.params["cc"];
//     console.log(uname + cc);
//     res.send(uname + cc)
// })


app.set("view engine","ejs")      //使用ejs模板
app.get("/ejs",(req,res) => {
   res.rend("data",{})       //"data"是自己在views下创建的.ejs的文件，直接可以在服务器中运行，{}中可以添加数据 
})
console.log("server start!");
app.listen(3535)