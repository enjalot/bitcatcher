
//foundation db
var fdb = require('fdb').apiVersion(100)
var db = fdb.open();

var request = require('request');

var now = +new Date();

baseUrl = "https://www.bitstamp.net/api/"

//slurp ticker
//slurp depth (order book)
function getDepth(group) {
  group = group || 0; //default to 0 for grouping
  
}
//slurp transactions
