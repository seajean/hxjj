module.exports = {
	errors: {
		// All Errors Except for 404 Page.
		app.use(function(err, req, res, next){
			var requestedURL = req.protocol + '://' + req.get('Host') + req.url;	
			console.error(err.stack);
			console.log(err.stack + 'URL: ' + requestedURL);
			res.render('error', {title: err.stack});
		});

		// 404 Error Page. MUST BE LAST (except for server).
		app.use(function(req, res, next){
			var requestedURL = req.protocol + '://' + req.get('Host') + req.url;
			console.log('Error: 404 - ' + requestedURL );
			res.render('error', {title: '404'});
		});
	}
};
