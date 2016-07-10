var router = require('./router'),
	nunjucks = require('nunjucks'),
	middleware;


//depedencies
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

middleware = function(app){
	// app.use(favicon(path.join(__dirname, 'Public/Image', 'favicon.png')));
	app.use(logger('dev'));
	app.use(cookieParser())
	app.use(bodyParser.json({})); // set limit to 100 mb
	app.use(bodyParser.urlencoded({ extended: false}));
	app.use(express.static(path.join(__dirname, 'Public')));
	
	router.userrouter(app);
	router.adminrouter(app);
	nunjucks.configure('View',{
		autoescape: true,
		express: app
	});
};

module.exports = middleware;