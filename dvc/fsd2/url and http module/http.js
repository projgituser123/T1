
var httpserver = require("http")
httpserver.createServer(function(req,res){
    /*
    res.writeHead(200, {"Content-type" : "text/html"});
    res.write("greeting\n");
    res.write("<h1>hello from node js http...</h1>");
   // res.write("greeting\n"); // if res.writeHead () is not written then the output gets messed up.
    res.end();
    */

    console.log(req)
    res.end(req.url) // open browser and write somethin in url with a slash..
}).listen(8008)