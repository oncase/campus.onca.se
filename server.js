var express = require('express');
var server = express();

server.use(express.static('./'));

server.listen(8080);
console.log('Server running at http://localhost:8080/');

module.exports = server;