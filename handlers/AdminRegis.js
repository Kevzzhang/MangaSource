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

	ADMIN.findBOOK(Book.title).then(function(row){
        if(row.length > 0){
            res.json('buku ada judul yang sama');
        }
        else{
            ADMIN.createBook(Book).then(function(){        
                fs.mkdirSync(path.join(__dirname, '..','public/Image/Manga',(Book.title).toString()));
                res.json('terdaftar');     
    	    })
        }
    });
}
adminPanel = {
    page : page,
    registerBook : registerBook
}

module.exports = adminPanel;