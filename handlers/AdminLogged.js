var adminPanel,
    page,
    login;
    
page = function(req,res){
    var username = req.params.username;
    res.render('adminPanelComicList.html',{username : username});
 
}

adminPanel = {
    page : page,
}

module.exports = adminPanel;