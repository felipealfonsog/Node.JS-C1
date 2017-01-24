var http = require("http");
   fs = require("fs");


// programacion ascrincrona
var html = fs.readFile("./html.html", function(err, html){
    http.createServer(function(req,res){
                  
res.write(html); 
res.end();

                  }).listen(8180);
    
});





