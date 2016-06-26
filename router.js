var express = require('express'),
	
	// user handler
	homePage = require("./handlers/homePage"),
	homeLoggedPage = require("./handlers/homeLoggedPage"),
	lstmanga = require("./handlers/mangaList"),
	bokunohero = require("./handlers/bokunoheroprofil"),
	readbokunohero = require("./handlers/readbnha"),
	

	Auth = require("./auth");

	// admin handler
	adminPage = require("./handlers/Admin"),
	adminLogged = require("./handlers/AdminLogged"),
	adminRegis = require("./handlers/AdminRegis"),
	adminUpdate = require("./handlers/AdminUpdate"),
	
	AuthAdmin = require("./authAdmin");// Authadmin

	
var	user = express.Router(),
	userrouter;

var admin = express.Router(),
	adminrouter;
userrouter = function(app){
	// GET
    user.get('/',homePage.page);
	user.get('/Logged/:username',Auth.validate,homeLoggedPage.page);
	user.get('/mangalist',lstmanga.page);
	user.get('/BokuNoHero',bokunohero.page);
	user.get('/ReadBokuNoHero',readbokunohero.page);
	user.get('/logout',Auth.validate,function(req,res){
		res.clearCookie('auth');
		res.redirect('/');
	})
	
	//POST
	user.post('/login',homePage.login);
	user.post('/Signup',homePage.register);
    app.use(user);
}

adminrouter = function(app){
	// GET
    admin.get('/',adminPage.page);
	admin.get('/adminpanel/:username',AuthAdmin.validate,adminLogged.page);
	admin.get('/adminpanel/:username/adminRegis',AuthAdmin.validate,adminRegis.page);
	admin.get('/adminpanel/:username/adminUpdate',AuthAdmin.validate,adminUpdate.page);
	admin.get('/logout',AuthAdmin.validate,function(req,res){
		res.clearCookie('authAdmin');
		res.redirect('/admin');
	})
	
	//POST
	admin.post('/login',adminPage.login);
    app.use('/admin',admin);///admin = action /harus local host 3000 /admin , semua url/admin memakian object admin
}

var router = {
	userrouter : userrouter,
	adminrouter : adminrouter
}

module.exports = router;