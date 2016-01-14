var Item = require('./model/item.js').item
module.exports = function(app){
	console.log('routes ready')

	app.use(function (error, req, res, next){
	    //Catch json error
	    console.log('this is the err', req.body);
	    next();
	});

	app.all('/*', function(req, res, next) {
	  res.header("Access-Control-Allow-Origin", "*");
	  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
	  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
	  next();
	});

	// app.get('*', function(req, res) {
	//          res.sendfile('./client/index.html'); // load our public/index.html file
	//      });
app.get('/', function(req, res){});

	app.post('/newitem', function(req, res, next){

		console.log('we got some data', req.body);
		var item = new Item()
		item.username= req.body.username; 
		item.name= req.body.name;
		item.description= req.body.description;
		item.picture= req.body.picture;
		item.price= req.body.price;
		item.buylink= req.body.buylink;
		item.save(function(err, data){
			if(err){return err};
			console.log('this is what you saved', data);
		})
	// app.get('/allitems', function(req, res, next){
	// 	Item.find({}, function(err, data){
	// 	      if(err){ return next(err);}
	// 	      console.log('this is data', data)
	// 	      res.json(data);
	// 	    });
	// })
		

	})


}