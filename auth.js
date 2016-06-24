var jwt    = require('jsonwebtoken');

function generateToken(user){
	var token = jwt.sign(user, 'SECRET', {
          expiresIn: '1440m' // expires in 24 hours
        });
	return token;
};

function validate(req, res, next){
  	var token = req.cookies.auth;
	// decode token
	if (token) {
		// verifies secret and checks exp
		jwt.verify(token, 'SECRET', function(err, decoded) {      
		  	if (err) {
		    	return res.json({ success: false, message: 'Failed to authenticate token.' });    
		  	} 
			else {
		    // if everything is good, save to request for use in other routes
				var user ={
					id_user : decoded.id_user,
					username : decoded.username,
					email : decoded.email
				}
		    	req.decoded = user;   
				next();
			}
		});
	} 
	else {
		// if there is no token
		// return an error
		return res.render("error.html",{ 
		    success: false, 
		    message: 'No token provided.' ,
			status : 403
		});
	}
};

var auth = {
	validate: validate,
	generateToken: generateToken,
}

module.exports = auth;