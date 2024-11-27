const express = require('express')
var bodyParser = require('body-parser')
require('./models')

const app = express()
app.use(express.json());
app.use("/api/v1/student",require("./routes/studentRoutes"))
app.use(bodyParser.json())
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000,()=>{
    console.log("App run on 3000 port");
})