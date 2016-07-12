var adminPanel,
	registerBook,
    page,
    ADMIN = require("../utils/ADMIN"),
    BOOK = require("../utils/BOOK"),
    AuthAdmin = require("../authAdmin"),
    multer  = require('multer'),
    login,
    newPath;
var path = require('path');
var fs = require('fs');  

page = function(req,res){
    var username = req.params.username;
    res.render('adminPanelRegis.html',{username : username, hiddenState:"hidden", hiddenMessage:""});
}
 var upload = multer({ 
            dest: newPath,
            rename: function (fieldname, filename) {
                return "cover";
            },
            onFileUploadStart: function (file) {
                console.log(file.originalname + ' is starting ...')
            },
            onFileUploadComplete: function (file) {
                console.log(file.fieldname + ' uploaded to  ' + file.path)
            }
        });

registerBook = function(req, res){
    newPath
    
	var Book ={
		title : req.body.title,
		author : req.body.author,
		rating : req.body.rating,
		about : req.body.about,
        status : 'ongoing'
        
	}
    
	BOOK.findBOOK(Book.title).then(function(row){
        if(row.length > 0){
                var username = req.params.username;
                res.render('adminPanelRegis.html',{username : username, hiddenState:"", hiddenMessage:"Telah ada buku dengan judul yang sama!"});
        }
        else{
            BOOK.createBook(Book).then(function(){
                newPath = path.join(__dirname, '..','public/Image/Manga',(Book.title).toString())
                fs.mkdirSync(newPath);
                upload.single('cover');
                var username = req.params.username;
                res.render('adminPanelRegis.html',{username : username, hiddenState:"", hiddenMessage:"Buku telah ditambahkan!"});
    	    })
        }
    });
}

adminPanel = {
    page : page,
    registerBook : registerBook
}

module.exports = adminPanel;