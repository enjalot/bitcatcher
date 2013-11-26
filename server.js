var server = require('./lib/index')

var port = process.env.PORT || 8080

server.listen(port, function() {
  console.log(
    '[%s] listening on port %d'
  , (new Date).toUTCString(), port
  )
})
