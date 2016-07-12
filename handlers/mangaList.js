var mangalist,
    page,
    login,
    USER = require("../utils/USER"),
    BOOK = require("../utils/BOOK"),
    Auth = require("../auth");
    
page = function(req,res){
    BOOK.fetchAllBook().then(function(Books){
        res.render('mangalist.html',{Books : Books,getInitial : function(string){return string.charAt(0);}});
    });
}
mangalist = {
    page : page,
    login : login
}

module.exports = mangalist;
