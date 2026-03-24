// create a server of a webpage having two pages home and about, when the user opens the home page display "welcome to homepage !" and vice versa display "welcome in about section", if user open any other page display page not found...
var httpserver = require("http");
httpserver.createServer(function(req,res){
    res.writeHead(200, {"Content-type":"text/html"}); // this is fixed now for whole function... i
    const method = req.method;
    const requrl = req.url;

    if(method === "GET"){
        if (requrl == "/"){
            res.write("home page welcomes you !!\n");
            res.end();
        }
        else if(requrl == "/about"){
            res.write("welcome to about section");
            res.end();
        }
        else{
            // res.writeHead(404,{"Content-type" : "text/plain"}) // this will give error but to make it work try to give res.writeHead() to every page and which is also very logical 
            res.write("404 error page not found...")
            res.end();
        }
    }
    else{
        res.writeHead(400, {"Content-type" : "text/plain"});
            res.write("404 error page not found...")
            res.end();
    }
}).listen(8000)