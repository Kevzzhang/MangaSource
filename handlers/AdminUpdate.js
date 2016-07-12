var adminPanel,
    page,
    addChapter,
    Book = require("../utils/BOOK"),
    Chapter = require("../utils/CHAPTER");
var path = require('path');
var fs = require('fs');  
    
page = function(req,res){
    var username = req.params.username;
    Book.fetchAllBook().then(function(Books){
        res.render('adminPanelUpdate.html',{username : username, Books : Books, hiddenState:"hidden", hiddenMessage:""});
    });
}

addChapter = function(req,res){
    var info = {
        bookTitle : req.body.buku,
        title : req.body.title
    }
    
    Book.findBOOK(info.bookTitle).then(function(row){
        info.bookID = row[0].id_buku;
        Chapter.createChapter(info).then(function(){
            fs.mkdirSync(path.join(__dirname, '..','public/Image/Manga',(info.bookTitle).toString(),(info.title).toString()));
        })
        var username = req.params.username;
        Book.fetchAllBook().then(function(Books){
            res.render('adminPanelUpdate.html',{username : username, Books : Books, hiddenState:"", hiddenMessage:"Chapter ditambahkan pada komik "+info.bookTitle+"!"});
        });
    });
}

editChapter = function(req,res){
    var info = {
        bookID : req.params.id_buku,
        title : req.params.title
    }
    
}

adminPanel = {
    page : page,
    addChapter : addChapter,
    editChapter : editChapter
}

module.exports = adminPanel;