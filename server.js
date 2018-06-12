const express = require('express')
const app = express()
const path = require('path')
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

app.get("/", function(req, res) {
    
    res.sendFile(path.join(__dirname, "index.html"));
  });

  app.get("/api/women", function(req, res) {
    
        connection.query("select * from mens_shirts", function(err, response) {
            if (err) throw err;
            res.send(response);
            connection.end();
        });
    
    res.sendFile(path.join(__dirname, "index.html"));
  });

  app.get("/api/men", function(req, res) {
    
    connection.query("select * from mens_shirts", function(err, response) {
        if (err) throw err;
        res.send(response);
        connection.end();
    });

res.sendFile(path.join(__dirname, "index.html"));
});
  
app.listen(3000, () => console.log('Example app listening on port 3000!'))