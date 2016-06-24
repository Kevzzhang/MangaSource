var knex = require('../model');

var findUSER = function(username){
	return knex('admin').select('id_admin','username','password').where('username',username);
};

module.exports = {
	findUSER:findUSER
};