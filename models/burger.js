//Import ORM to create functions that will interact w/the database.
var orm = require("../config/orm.js");

//Create the code that will call the ORM functions using burger specific input for the ORM
var burger = {
    //selectAll()
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    //insertOne()
    // Cols and Vals are arrays.
    insertOne: function(id, cb) {
      orm.insertOne("burgers", id, ["burger_name", "devoured"], function(res) {
        cb(res);
      });
    },
    //updateOne()
    updateOne: function(id, cb) {
      orm.updateOne("burgers", id, function(res) {
        cb(res);
      });
    },
};

//Export burgers.js
module.exports = burger;