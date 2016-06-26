var mangalist,
    page,
    login,
    USER = require("../utils/USER"),
    Auth = require("../auth");
    
page = function(req,res){
    res.render('mangalist.html');
}
mangalist = {
    page : page,
    login : login
}

module.exports = mangalist;
