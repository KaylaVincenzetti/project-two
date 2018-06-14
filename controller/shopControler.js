const path = require('path')
var connection = require('../config/connection.js')
module.exports = function(app) {

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  
app.get("/men.html", function(req, res) {
    
    res.sendFile(path.join(__dirname, "../public/men.html"));
  });

  app.get("/women.html", function(req, res) {
    
    res.sendFile(path.join(__dirname, "../public/women.html"));
  });

  app.get("/store.js", function(req, res) {
    
    res.sendFile(path.join(__dirname, "../public/store.js"));
  });

  app.get("/cart.html", function(req, res) {
    
    res.sendFile(path.join(__dirname, "../public/cart.html"));
  });

  app.get("/api/women", function(req, res) {
    
        connection.query("select * from inventory where gender = 'F' ", function(err, response) {
            if (err) throw err;
            res.json(response);
            
        });
    
        //remove because we were doing a send twice and it was throwing error
    //res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/api/men", function(req, res) {
    
    connection.query("select * from inventory where gender = 'M' ", function(err, response) {
        if (err) throw err;
        res.json(response);
        
        
    });

//res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/api/cart", function(req, res) {
    
    connection.query("select * from cart", function(err, response) {
        if (err) throw err;
        res.send(response);
        
        
    });

//res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/shop/add/:id", function(req, res) {
    var queryString = "SELECT * FROM inventory WHERE ID (?)";
    connection.query(queryString, [id], function(err, result) {
    if (err) {
        throw err;
    }
    
    });
    res.json(result);
});

app.post("/shop/add/:id", function(req, res) {
    var id = req.params.id;
    console.log(id);
    var queryString = "insert into cart (product_id) values (??)";
    connection.query(queryString, [id], function(err, result) {
    if (err) {
        throw err;
    }
    
    });
    res.json(result);

    
})

}


