let http = require("http")
http.createServer(function(req,res){
    res.write("hello from node js...")
    res.write("\nresponse is displayed here..")
    //res.end();
    res.end("end note")
    res.end()
   // res.write("string after ending the response...") // this will not print as the response is ended before this LOC, as browser's door is closed...and it will give error..
}).listen(8000) 