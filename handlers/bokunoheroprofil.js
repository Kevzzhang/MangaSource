var bnhp,
    page,
    login,
    USER = require("../utils/USER"),
    Auth = require("../auth");
    
page = function(req,res){
    res.render('manga/BokunoHero/BokuNoHeroprofil.html');
}
bnhp = {
    page : page,
    login : login
}

module.exports = bnhp;
