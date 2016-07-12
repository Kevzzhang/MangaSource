var knex = require('../model');

var createChapter = function(Chapter){
		return knex('Chapter').insert({
			namaChapter : Chapter.title,
			waktu : Date.now(),
			id_buku : Chapter.bookID,
			pageCount : 100
		});
}
var findChapter = function(judul){
	return knex('Chapter').select().where('namaChapter',judul);
};

var fetchAllChapter = function(){
	return knex.select().table('Chapter');
}

var getChapterByBook = function(id){
	return knex('Chapter').select().where('id_buku',id);
}

module.exports = {
	createChapter : createChapter,
	findChapter : findChapter,
	fetchAllChapter : fetchAllChapter,
	getChapterByBook : getChapterByBook
};