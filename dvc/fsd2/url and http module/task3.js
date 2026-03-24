// create one page with two hyperlinks = details and about ... by clicking the particular link it should open that particular page .

// by requesting the about page , display "welcome to about page in blue color.".. when requesting the details display a a json having two key value pairs 

// if user requests any other page display page not found in red color.

var httpserver = require("http");
var jsonobj = {
    "name": "Pedri",
    "team": "FC Barcelona",
    "number": 8,
    "position": "Midfielder"
  }  
httpserver.createServer(function(req,res){
    const method = req.method;
    const requrl = req.url;

    if (method == "GET"){
        if (requrl == "/"){
            res.writeHead(200, {"Content-type" : "text/html"});
            res.write("WELCOME TO HOME PAGE..\n")
            res.write("ABOUT page redirect = <a href='/about'>about page</a>\n");
            res.write("details page redirect = <a href = '/details' >/details page</a>");
            res.end();
        }
        else if(requrl == "/about"){
            res.writeHead(200, {"Content-type" : "text/html"});
            res.write("<h1 style = 'color : blue;'>WELCOME TO ABOUT PAGE..</h1>\n");
            res.end();
        }
        else if(requrl == "/details"){
            res.writeHead(200, {"Content-type" : "application/json"});
            res.write(JSON.stringify(jsonobj));
            res.end();
        }
        else{
            res.writeHead(404, {"Content-type" : "text/plain"});
            res.end("404 page not found...")
        }
    }
    else{
        res.writeHead(404, {"Content-type" : "text/plain"});
        res.end("404 page not found...")
    }
}).listen(8880);