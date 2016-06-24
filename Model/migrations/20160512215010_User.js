var table = function(table){
	table.increments('id_user').primary();
	table.string('nickname',16).notNullable();
	table.string('username',16).notNullable();
	table.string('picture',60);
	table.string('email',50).notNullable();
	table.string('password',16).notNullable();
};


exports.up = function(knex, Promise) {
	return knex.schema.createTable('user', table)
		.then(function () {
			console.log('User table was created!');
		});
};

exports.down = function(knex, Promise) {
	return knex.schema
		.dropTable('user', table)
		.then(function () {
			console.log('User table was dropped!');
		});  
};
