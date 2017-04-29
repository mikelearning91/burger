/* Connection to the database and export and used by the O.R.M. */
var mysql = require('mysql');

var source = {

    localhost: {
        port: 3306,
        host: 'localhost',
        user: 'root', // Your MySql username
        password: 'root', // Your MySql password
        database: 'burgers_db' // Run schema and seeds in burger/db directory
    },
    jawsDB: {
        port: 3306,
        host: 'otmaa16c1i9nwrek.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'zc4fhf9asxxwdtbt',
        password: 'ane9ogwbjgcsviwn',
        database: 'burgers_db'
    }
}

var connection = mysql.createConnection(source.jawsDB);

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('Databased connected as id: ' + connection.threadId);
});

module.exports = connection;