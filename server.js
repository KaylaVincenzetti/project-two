const express = require('express')
const app = express()
const path = require('path')
var mysql = require('mysql');
var bodyParser = require('body-parser');



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

  
app.get("/men.html", function(req, res) {
    
    res.sendFile(path.join(__dirname, "men.html"));
  });

  app.get("/women.html", function(req, res) {
    
    res.sendFile(path.join(__dirname, "women.html"));
  });

  app.get("/store.js", function(req, res) {
    
    res.sendFile(path.join(__dirname, "store.js"));
  });

  app.get("/cart.html", function(req, res) {
    
    res.sendFile(path.join(__dirname, "cart.html"));
  });

  app.get("/api/women", function(req, res) {
    
        connection.query("select * from womens_shirts", function(err, response) {
            if (err) throw err;
            res.send(response);
            
        });
    
    res.sendFile(path.join(__dirname, "index.html"));
  });

  app.get("/api/men", function(req, res) {
    
    connection.query("select * from mens_shirts", function(err, response) {
        if (err) throw err;
        res.send(response);
        
        
    });

res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api/cart", function(req, res) {
    
    connection.query("select * from cart", function(err, response) {
        if (err) throw err;
        res.send(response);
        
        
    });

res.sendFile(path.join(__dirname, "index.html"));
});
  
app.listen(3000, () => console.log('Example app listening on port 3000!'))

connection.end();