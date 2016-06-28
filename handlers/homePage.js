var frontPage,
    page,
    login,
    register,
    search,
    USER = require("../utils/USER"),
    BOOK = require("../utils/BOOK"),
    Auth = require("../auth");
    
page = function(req,res){
    res.render('Home.html');
}

login = function(req,res){
    var username = req.body.username;
    console.log(username);    USER.findUSER(username).then(function(User){
        var user = User[0];
        console.log(user);
        console.log(User);
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
                res.cookie('auth',token);
                res.redirect('/Logged/'+user.username);
            } 
        }  
    });
}
register = function(req,res,next){
    // Get the User data from the Form
    var User={
        fname: req.body.fname,
        lname : req.body.lname,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password1,
        repassword: req.body.password2
    };
    if(User.password != User.repassword){
        res.json('password tidak sama');
    }
    // Insert the New User to database
    USER.saveUSER(User).then(function(){
    res.json('User ' + User.username +' berhasil didaftar');
     
       // USER.findUSER(User.username).then(function(row){
           // // Create First Collection Data
           //  var Collection ={
           //      photos : JSON.stringify([]),
           //      path : path.join(__dirname, '..','public/images/',(row[0].username).toString()),
           //      id_user : row[0].id_user
           //  }
           //  // Insert the New Collection to database
           //  COLLECTION.saveCOLLECTION(Collection).then(function(){
           //      var dir = Collection.path;
           //      // Create User folder named 'username' into public/images/username
           //      if (!fs.existsSync(dir)){
           //           fs.mkdirSync(dir);
           //      }
           //      res.render('info.html',{info: User.username + ' telah terdaftar',back:'/'}); 
           //  })
            
        // })
        
    });
}

search = function(req,res){
    var query = req.body.query;
    console.log(query);
    BOOK.searchTitle(query).then(function(SearchResult){
        console.log(SearchResult);
        if (SearchResult.length > 0){
            res.json(SearchResult);
        }
        else{
            res.json("empty");
        }
    });
    
}

frontPage = {
    page : page,
    login : login,
    register : register,
    search : search
}

module.exports = frontPage;