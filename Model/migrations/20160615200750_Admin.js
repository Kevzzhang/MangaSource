var table = function(table){
	table.increments('id_admin').primary();// table incerement otomatis tambah 1
	table.string('username',16).notNullable();
	table.string('password',16).notNullable();
};


exports.up = function(knex, Promise) {
  return knex.schema.createTable('admin', table)
		.then(function () {
			console.log('Admin table was created!');
		});
};

exports.down = function(knex, Promise) {
  return knex.schema
		.dropTable('admin', table)
		.then(function () {
			console.log('Admin table was dropped!');
		});  
};
