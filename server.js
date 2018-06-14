var express = require('express')

var path = require('path')

var bodyParser = require('body-parser');

var connection = require('./config/connection');




var app = express()

app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

app.use(express.static("public"))

require("./controller/shopControler.js")(app)

// app.get("/shop/add/:id", function(req, res) {
//     var queryString = "SELECT * FROM inventory WHERE ID (?)";
//     connection.query(queryString, [id], function(err, result) {
//     if (err) {
//         throw err;
//     }
    
//     });
//     res.json(result);
// });

// app.post("/shop/add", function(req, res) {
//     var id=req.param('id');
//     console.log(id);
//     var queryString = "INSERT INTO cart set product_id=(?)";
//     connection.query(queryString, [id], function(err, result) {
//     if (err) {
//         throw err;
//     }
//     });
//     res.send(true);
// });




var port = process.env.PORT || 3000;  
app.listen(port, () => console.log('Example app listening on port 3000!'))

