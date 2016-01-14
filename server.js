var express = require('express');
var app = express();

var cors = require('cors')
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var methodOverride = require('method-override');
var activateRoutes = require('./server/routes.js')

var db = require('./config/config')

var port = process.env.PORT || 8080;



app.use(cors());
app.use(bodyParser.json());
// app.use (function (error, req, res, next){
//     //Catch json error
//     console.log('this is the err', req.body);
// });
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/client'));
app.use(express.static(__dirname + '/client/bower_components'));

activateRoutes(app);
app.listen(port);
console.log('Meet me at the port...its going down' + port);


module.exports = app;