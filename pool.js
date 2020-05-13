//创建mysql连接池
const mysql = require('mysql');
var pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'roo',
  password: '',
  database: 'sjg2016_com',
  connectionLimit: 10 
});
//把创建好的连接池导出
module.exports = pool;




