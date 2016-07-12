# MangaSource
Our Manga, Everyone's Manga

# Requirements
+install nodejs
+install express with terminal
	- npm install express --save
	- npm install nunjucks --save
	- npm install --save
+install fs and path
	- npm install path
	- npm install fs
+create a database in mysql and create a new database named "mangasource"
+set up knex database by running on /Model
	- knex migrate:latest --env production
+import data to sql by importing "data.sql" to "mangasource" database