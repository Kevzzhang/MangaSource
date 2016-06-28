var knex = require('../model');

var createChapter = function(Buku){
		return knex('Buku').insert({
			id_chapter : Buku.title,
			namaChapter : Buku.author,
			waktu : Date.now()
		});
}
var findChapter = function(judul){
	return knex('Chapter').select('id_chapter','namaChapter', 'waktu').where('judul',judul);
};

var fetchAllChapter = function(){
	return knex.select().table('Chapter');
}

module.exports = {
	createChapter : createChapter,
	findChapter : findChapter,
	fetchAllChapter : fetchAllChapter
};