//使用express构建web服务器 --11:25
const express = require('express');
const bodyParser = require('body-parser');
/*引入路由模块*/
const index=require("./routes/index.route");

var app = express();
var server = app.listen(12011);
//使用body-parser中间件
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));
/*使用路由器来管理路由*/
app.use("/index",index);
