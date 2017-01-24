var http = require("http");
   fs = require("fs");


// programacion ascrincrona
var html = fs.readFileSync("./html.html");


http.createServer(function(req,res){
                  
res.write(html); 
res.end();

                  }).listen(8180);



