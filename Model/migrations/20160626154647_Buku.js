var table = function(table){
	table.increments('id_buku').primary();
	table.string('judul',50).notNullable();
	table.string('author',30).notNullable();
	table.string('deskripsi',500);
	table.string('status',10).notNullable();
	table.string('rating',10).notNullable();
};


exports.up = function(knex, Promise) {
	return knex.schema.createTable('Buku', table)
		.then(function () {
			console.log('Buku table was created!');
		});
};

exports.down = function(knex, Promise) {
	return knex.schema
		.dropTable('Buku', table)
		.then(function () {
			console.log('Buku table was dropped!');
		});  
};
