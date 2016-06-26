var adminPanel,
	registerBook,
    page,
    ADMIN = require("../utils/ADMIN"),
    AuthAdmin = require("../authAdmin"),
    login;
var path = require('path');
var fs = require('fs');   
page = function(req,res){
    var username = req.params.username;
    res.render('adminPanelRegis.html',{username : username});
 
}

registerBook = function(req, res){
	var Book ={
		// cover : req.body.cover,
		title : req.body.title,
		author : req.body.author,
		rating : req.body.rating,
		about : req.body.about
	}
	ADMIN.createBook(Book).then(function(){
		ADMIN.findBOOK(Book.title).then(function(row){
			// Create First Collection Data
            // var Collection ={
            //     photos : JSON.stringify([]),
            //     path : path.join(__dirname, '..','public/Image/Manga',(row[0].id_buku).toString()),
            //     id_buku : row[0].id_buku
            // }
            // // Insert the New Collection to database
            // COLLECTION.saveCOLLECTION(Collection).then(function(){
            //     var dir = Collection.path;
            //     // Create User folder named 'username' into public/images/username
            //     if (!fs.existsSync(dir)){
            //          fs.mkdirSync(dir);
            //     }
            //     res.render('terdaftar'); 
                 fs.mkdirSync(path.join(__dirname, '..','public/Image/Manga',(row[0].id_buku).toString()));
                
                res.render('terdaftar'); 
           
		})
    });
}
adminPanel = {
    page : page,
    registerBook : registerBook
}

module.exports = adminPanel;