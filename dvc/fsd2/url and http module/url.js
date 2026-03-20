let url = require("url")
var u ="file:///C:/Users/LJENG/dvc/url%20module/demo.html?dvc=user+cr7&password_dvc=1234567890"
//var q = url.parse(u) // you can also write URL.parse(u) so that you dont have to write "process.noDeprecation = true;"

process.noDeprecation = true; //(to remove the deprication warning ...)
/*
console.log(q)
console.log(q.pathname)
console.log(q.query + " " +typeof(q.query)) // string

*/
// if you want querry in the form of object then..
var q = url.parse(u, true)
console.log(q.query, "name = " + q.query.dvc)

