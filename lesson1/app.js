var express = require("express")

var app = express()

app.get('/', function(req, res){
  res.send("hello world")
})

app.listen(3002, function(){
  console.log('app is listening at port 3002')
})