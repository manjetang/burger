// Set up MySQL connection.
var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
 } else {
    connection = mysql.createConnection({
  host: "JAWSDB_URL",
  user: "pwb39p7gy1rdqk4y",
  password: "siker7zy2x3ls4s8",
  database: "burgers_db"
});
  }

// Make it to connect.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for use by ORM.
module.exports = connection;
