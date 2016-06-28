var adminPanel,
    page,
    addChapter,
    Book = require("../utils/BOOK");
    
page = function(req,res){
    var username = req.params.username;
    Book.fetchAllBook().then(function(Books){
        res.render('adminPanelUpdate.html',{username : username, Books : Books});
    });
}

addChapter = function(req,res){
    
}

adminPanel = {
    page : page,
    addChapter : addChapter
}

module.exports = adminPanel;