// var connect = require('connect');
// var serveStatic = require('serve-static');

// var app = connect();

// app.use(serveStatic(__dirname, {
//     'index': ['index.html']
// }));

// app.listen(3000);

// console.log('Running on localhost:3000');

/* Express */
var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.send('Hello World!');
});

app.get('/test', function(req, res){
    res.send('TEST');
});

app.listen(3000, function(){
    console.log('Listening on port 3000');
})