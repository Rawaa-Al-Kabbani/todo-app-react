const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'raw75.aa',
  database: 'todo_db',
});

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;
