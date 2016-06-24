var homeLoggedPage,
    page,
    login;
    
page = function(req,res){
    var username = req.params.username;
    res.render('HomeLogged.html',{username : username});
}

homeLoggedPage = {
    page : page,
}

module.exports = homeLoggedPage;