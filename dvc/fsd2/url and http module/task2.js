// from task 1 try to print the json object and a image on home page..
var httpserver = require("http");
var jsonobj = {"name" : "dvc", "age": "19"}
var fs = require("fs")

httpserver.createServer(function(req,res){
   
    const method = req.method;
    const requrl = req.url;

    if(method === "GET"){
        if (requrl == "/"){
            res.write("home page welcomes you !!\n");
            res.end();
        }
        else if(requrl == "/about"){
            res.writeHead(200, {"Content-type" : "application/json"})
            res.write("welcome to about section\n");
            res.end(JSON.stringify(jsonobj));
        }
        else if(requrl == "/home/image"){
            res.writeHead(200, {"Content-type" : "image/jpg"});
            // res.write("fsd2/http module/pedri.jpg") // this is will work by but not print it so we have to read the bytes of the image using fs module.... all the modules in node js are working independently and have limited scope of work so we have to make diff module communicate each other by our logic and codes....
            var pedri = fs.readFileSync("pedri.jpg")
            var viti = fs.readFileSync("vitinha.jpg")
           // res.write(pedri);
            res.write(viti);
            res.end();
        }
        else{
            res.write("404 error page not found...")
            res.end();
        }
    }
    else{
        res.writeHead(400, {"Content-type" : "text/plain"});
            res.write("404 error page not found...")
            res.end();
    }
}).listen(8800)