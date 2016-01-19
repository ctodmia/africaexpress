var mongoose = require('mongoose');
var mongodbUri = 'mongodb://test:test@ds045785.mongolab.com:45785/africaexpress'
var Schema = mongoose.Schema;

mongoose.connect(mongodbUri)
var db = mongoose.connection;

db.on('error', function(err){
  console.log('connection error', err);
});

db.once('open', function(){
  console.log('connect to database');
});


var itemSchema = new Schema({
 username: String,
 itemname: String,
 picture: String,
 description: String,
 price: Number,
 buylink: String, 
});

var Item = mongoose.model("Item", itemSchema);

module.exports = {
  item: Item

};