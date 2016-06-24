var adminPage,
    page,
    login,
    User = require("../utils/ADMIN"),
    Auth = require("../authAdmin");
    
page = function(req,res){
    res.render('admin.html');
}
login = function(req,res){
    var username = req.body.username;
    console.log(username);    User.findUSER(username).then(function(User){
        var user = User[0];
        if (!user) {
            res.json({ success: false, message: 'Authentication failed. User not found.' });
        } 
        else if (user) {
            // check if password matches
            if (user.password != req.body.password) {
                res.json({ success: false, message: 'Authentication failed. Wrong password.' });
            }
            else {
                // if user is found and password is right
                // create a token
                var token = Auth.generateToken(user)
                // return the information including token as JSON
                // res.json({
                //     success: true,
                //     message: 'Enjoy your token!',
                //     token: token
                // });
                res.cookie('authAdmin',token);
                console.log(token);
                res.redirect('/admin/adminpanel/'+user.username);
            } 
        }  
    });
}

adminPage = {
    page : page,
    login : login
}

module.exports = adminPage;
