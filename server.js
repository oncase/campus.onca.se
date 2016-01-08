var express = require('express');
var server = express();
var rewrite = require('express-urlrewrite');


server.use(express.static('./'));

server.listen(8080);
console.log('Server running at http://localhost:8080/');

module.exports = server;
