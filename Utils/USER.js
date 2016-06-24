var knex = require('../model');
var saveUSER = function(User){
	var nickname = User.fname + " " + User.lname;
	return knex('user').insert({
		nickname : nickname,
		username:User.username,
		email:User.email,
		password:User.password
	});
};

var findUSER = function(username){
	return knex('user').select('id_user','username','password','email').where('username',username);
};

module.exports = {
	findUSER:findUSER,
	saveUSER : saveUSER

};