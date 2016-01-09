var express = require('express');
var server = express();
var rewrite = require('express-urlrewrite');

 // server.use(rewrite(/^\/courses\/(\w+)\/?/, '/#!/courses/$1'));
 // server.use(rewrite(/^\/courses\/?$/, '/#!/courses'));
 // these need to go first:

server.use(express.static('./'));

server.listen(8080);
console.log('Server running at http://localhost:8080/');

module.exports = server;
