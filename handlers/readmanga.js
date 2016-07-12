var readmanga,
    page,
    login,
    USER = require("../utils/USER"),
    BOOK = require("../utils/BOOK"),
    CHAPTER = require("../utils/CHAPTER"),
    Auth = require("../auth");

page = function(req,res){
    var hlmn = parseInt(req.params.hlmn);
    var last = false;
    BOOK.findBOOK(req.params.title).then(function(book){
        CHAPTER.findChapter(req.params.chapter).then(function(chapter){
            if(hlmn == parseInt(chapter[0].pageCount)){
                last = true;
            }
            res.render('readmanga.html', {book : book[0], chapter : chapter[0], hlmn: hlmn, last :last});
        });
    });
}
readmanga = {
    page : page,
    login : login
}

module.exports = readmanga;
    