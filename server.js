const express = require('express')

const path = require('path')

var bodyParser = require('body-parser');




let app = express()

app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

app.use(express.static("public"))

require("./controller/shopControler.js")(app)




  
app.listen(3000, () => console.log('Example app listening on port 3000!'))

