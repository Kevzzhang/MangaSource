var knex = require('../model');

var createBook = function(Buku){
		return knex('Buku').insert({
			// cover : Buku.cover,
			judul : Buku.title,
			author : Buku.author,
			rating : Buku.rating,
			deskripsi : Buku.about

		});
}
var findBOOK = function(judul){
	return knex('Buku').select('id_buku','judul').where('judul',judul);
};

var fetchAllBook = function(){
	return knex.select().table('Buku');
}

var findUSER = function(username){
	return knex('admin').select('id_admin','username','password').where('username',username);
};

module.exports = {
	findUSER:findUSER,
	createBook : createBook,
	findBOOK : findBOOK
};