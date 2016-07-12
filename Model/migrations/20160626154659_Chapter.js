var table = function(table){
	table.increments('id_chapter').primary();
	table.string('namaChapter',50).notNullable();
	table.datetime('waktu').notNullable();
	table.integer('id_buku').notNullable();
	table.integer('pageCount').notNullable();
};


exports.up = function(knex, Promise) {
	return knex.schema.createTable('Chapter', table)
		.then(function () {
			console.log('Chapter table was created!');
		});
};

exports.down = function(knex, Promise) {
	return knex.schema
		.dropTable('Chapter', table)
		.then(function () {
			console.log('Chapter table was dropped!');
		});  
};
