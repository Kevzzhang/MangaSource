var bookprofile,
    page,
    login,
    USER = require("../utils/USER"),
    BOOK = require("../utils/BOOK"),
    CHAPTER = require("../utils/CHAPTER"),
    Auth = require("../auth");
    
page = function(req,res){
    BOOK.findBOOK(req.params.title).then(function(book){
        CHAPTER.getChapterByBook(book[0].id_buku).then(function(chapters){
            res.render('bookprofile.html', {book : book[0], chapters : chapters});
        });
    });
    // res.render('bookprofile.html');
}

bookprofile = {
    page : page,
    login : login
}

module.exports = bookprofile;
