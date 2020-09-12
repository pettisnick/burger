//Set up MySQL
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  //connect to JawsDB / heroku
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  //connect to local database
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Braves20!",
    database: "burgers_db"
  });
}

  // Initiate MySQL Connection
  connection.connect(function (err) {
    if (err) {
      //if error, console.log error connecting plus whatever happened
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

  // Export connection for our ORM to use.
  module.exports = connection;
