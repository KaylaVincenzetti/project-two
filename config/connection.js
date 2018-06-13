var mysql = require('mysql');

var connection = mysql.createConnection({



    host:"localhost",
    port:3306,
    user:"root",
    password:"root",
    database:"products_db"
})


connection.connect(function(err,res){
    console.log("Connected as id: " +connection.threadId);
    
});

module.exports = connection;