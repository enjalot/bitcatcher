var http = require('http');
var fs = require('fs');
var express = require('express');

//foundation db
var fdb = require('fdb').apiVersion(100)
var db = fdb.open();

var api = express()
  .use(express.bodyParser())
  .use(express.cookieParser())

//set up api
api.get('/', function(req, res) {
  res.send("more info: <a href='http://github.com/enjalot/bitcatcher'>http://github.com/enjalot/bitcatcher</a>"); //res.send(204)
})

api.get('/depth/:exchange/:start/:end', function(req, res, next) {
  console.log("params", req.params);
  res.send("hi");
})



api.all('*', function(req, res) {
  res.send(404)
})

module.exports = http.createServer(api)
