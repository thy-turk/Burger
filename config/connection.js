var mysql = require("mysql");

connection = mysql.createConnection("mysql://sxrn262bva23340t:je8hb0umbmy1kr4v@tyduzbv3ggpf15sx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/jb3v1gm87wa3imka");

// var connection = mysql.createConnection({
//   host: "tyduzbv3ggpf15sx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	",
//   port: 3306,
//   user: "	sxrn262bva23340t",
//   password: "	je8hb0umbmy1kr4v",
//   database: "	jb3v1gm87wa3imka"
// });

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "password",
//   database: "burgers_db"
// });

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


module.exports = connection;