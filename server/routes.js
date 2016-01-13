module.exports = function(app){
	console.log('routes ready')

	app.post('/page', function(data){
		console.log('we got some data', data)
	})

	app.get('*', function(req, res) {
	        // res.sendfile('./client/index.html'); // load our public/index.html file
	    });
}