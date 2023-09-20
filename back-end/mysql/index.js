var mysql = require('mysql');

// 创建数据库连接池，配置基本信息，连接mysql
var connection = mysql.createConnection({
    host: 'rm-cn-20p368cdl000qdco.rwlb.rds.aliyuncs.com',
    user: 'root_2',
    password: '12345678@a',
    port: '3306',
    database: 'diary',
});

connection.connect(function (err) {
    if (err) {
        console.log('[query] - :' + err);
        return;
    }
    console.log('[connection connect] succeed!');
});

module.exports = connection;