var express = require('express');
var app = express();

app.use('/app', express.static(__dirname + '/app'));
app.use('/assets', express.static(__dirname + '/assets'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/main.js', express.static(__dirname + '/main.js'));
app.use('/array.indexof.polyfill.js', express.static(__dirname + '/array.indexof.polyfill.js'));

app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', { root: __dirname });
});

app.listen(8080);
console.log('Server running at http://localhost:8080/');
