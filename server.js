var express = require('express');
var app = express();
var mongoose = require('mongoose')
var cors = require('cors')
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var methodOverride = require('method-override');
var activateRoutes = require('./server/routes.js')

var config = require('./config/config')

var port = process.env.PORT || 8080;

var uri = config.MONGO_URI; 

mongoose.connect(uri);
var db = mongoose.connection;
db.on('error', function(err){
  console.log('connection error', err);
});
db.once('open', function(){
  console.log('connect');
});

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