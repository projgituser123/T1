/*
Write node js script to fetch values from url given below and display output as asked.
"https://www.google.com/exam.txt?c1=Hello&amp;c2=FSD2+T1+Test&amp;c3=
Welcome+to+LJU#AllTheBest"
1) Data must be written as below in file named “exam.txt”. File name must be 
fetched from
the url given above.
Output:
Hello!
Welcome to LJU FSD2 T1 Test
#AllTheBest
2) Read content from file “exam.txt” and send response to server and display data in 
“/” page
in same format as above but in H1 tag and in red color.
3) If any other page is requested it shows “Page not found” message in plain text.

*/



var fs = require("fs")
var http = require("http")
var urlmodule = require("url")
process.noDeprecation = true;
var url = "https://www.google.com/exam.txt?c1=Hello&amp;c2=FSD2+T1+Test&amp;c3=Welcome+to+LJU#AllTheBest";
var u = urlmodule.parse(url, true)

var q = u.query
console.log(q)
var h =u.hash
console.log(h)
var filedata= q.c1 + " \n" + q["amp;c2"] + " \n" + q["amp;c3"] + " \n" + h
console.log(filedata)
var txtpath = u.pathname
console.log(txtpath)

var filepath = "D:/dvc/fsd2/pb solution" + txtpath
// fs.writeFileSync(filepath, filedata)

http.createServer(function(req,res){
    const method = req.method;
    const requrl = req.url;
    if(method == "GET"){
        if (requrl == "/examtxt_content"){
            content = fs.readFileSync(filepath,"utf-8")
            res.write(content);
            res.end();
        }
        else{
            res.writeHead(404, {"Content-type" : "text/plain"});
            res.write("404 error page not found...")
            res.end();
        }
    }
    else{
        res.writeHead(404, {"Content-type" : "text/plain"});
        res.write("404 error page not found...")
        res.end();
    }
}).listen(8888)