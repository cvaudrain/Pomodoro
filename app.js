const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const app = express();
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){
  res.sendFile(__dirname + "index.html")
});
app.post("/", function(req,res){
  console.log("successfully posted to index.html")
  
});


app.listen(3000,function(){
  console.log("Server running on port 3000")
});
