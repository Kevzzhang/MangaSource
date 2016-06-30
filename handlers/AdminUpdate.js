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
    var info = {
        bookID : req.params.id_buku,
        title : req.params.title
    }
    
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
    
}

editChapter = function(req,res){
    var info = {
        bookID : req.params.id_buku,
        title : req.params.title
    }
    
       // CHAPTER.findCHAPTER(User.username).then(function(row){
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
    
}

adminPanel = {
    page : page,
    addChapter : addChapter,
    editChapter : editChapter
}

module.exports = adminPanel;