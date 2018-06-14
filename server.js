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





var port = process.env.PORT || 3000;  
app.listen(port, () => console.log('Example app listening on port 3000!'))

