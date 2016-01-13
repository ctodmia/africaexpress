var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var routes = require('./server/routes')

var db = require('./config/config')

var port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use (function (error, req, res, next){
    //Catch json error
    console.log('this is the err', req.body);
});
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('X-HTTP-Method=Override'));
app.use(express.static(__dirname + '/client'));
// app.use(express.static(__dirname + '/bower_components'));
routes(app);

app.listen(port);

console.log('Meet me at the port...its going down' + port);

exports = module.exports = app;