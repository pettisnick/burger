const connection = require("../config/connection.js");

function printQuestionMarks(num) {
  var arr = [];
  //returns a string of "?, ?, ?" with a 'num' number of question marks
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

//Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  //loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    //check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      //if string with spaces, add quotations (Michael Jordan => 'Michael Jordan')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      //{sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  //return single comma-separated string
  return arr.toString();
}

//selectAll()
var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  //insertOne()
  insertOne: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  //updateOne()
  //example of objColVals would be {name: panther, sleepy: true}
  updateOne: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

//Export ORM
module.exports = orm;
