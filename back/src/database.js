const mysql = require('mysql');


const mysql_connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'TOOR',
    database: 'prueba',
    port: '3306'
});

mysql_connection.connect((err) => {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log('Db is Connected');
    }
});

module.exports = mysql_connection;