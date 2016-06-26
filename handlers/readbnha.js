var rbnha,
    page,
    login,
    USER = require("../utils/USER"),
    Auth = require("../auth");

page = function(req,res){
    res.render('manga/BokunoHero/Readmanga.html');
}
rbnhp = {
    page : page,
    login : login
}

module.exports = rbnhp;
    