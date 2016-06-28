var adminPanel,
    page,
    login,
    Book = require("../utils/BOOK");
    
page = function(req,res){
    var username = req.params.username;
    Book.fetchAllBook().then(function(Books){
        res.render('adminPanelComicList.html',{username : username, Books : Books});
    });
}

adminPanel = {
    page : page,
}

module.exports = adminPanel;