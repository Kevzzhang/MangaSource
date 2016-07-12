var knex = require('../model');

var createBook = function(Buku){
		return knex('Buku').insert({
			// cover : Buku.cover,
			judul : Buku.title,
			author : Buku.author,
			rating : Buku.rating,
			deskripsi : Buku.about,
			status : Buku.status
		});
}
var findBOOK = function(judul){
	return knex('Buku').select().where('judul',judul);
};

var fetchAllBook = function(){
	return knex.select().table('Buku');
}

var searchTitle = function(query){
	var requery = '%'+query+'%';
	return knex('Buku').select('judul').where('judul','like',requery);
}

module.exports = {
	createBook : createBook,
	findBOOK : findBOOK,
	searchTitle : searchTitle,
	fetchAllBook : fetchAllBook
};