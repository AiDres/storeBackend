//创建mysql连接池
const mysql = require('mysql');

// 正式环境测试环境
let debuger = false;
let packages = debuger?{
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'sjg2016_com',
  connectionLimit: 10 
}:{
  host: '127.0.0.1',
  user: 'sjg2016_com',
  password: 'mpxWX2xGNRsBwTjX',
  database: 'sjg2016_com',
  connectionLimit: 10 
}
var pool = mysql.createPool(packages);
//把创建好的连接池导出
module.exports = pool;




