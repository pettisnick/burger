// Set up MySQL connection.
const mysql = require("mysql");

// MySQL DB Connection Information
const connection = mysql.createConnection({
  host: "localhost",
  port: 8080,
  user: "root",
  password: "Braves20!",
  database: "burgers_db"
});

// Initiate MySQL Connection
connection.connect(function(err) {
  if (err) {
    //if error, console.log error connecting plus whatever happened
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
