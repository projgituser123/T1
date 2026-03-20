let url = require("url")
let u = "file:///C:/Users/LJENG/dvc/url%20module/demo.html?maths=59&science=90&history=70&outof=100"
process.noDeprecation = true;
let q = url.parse(u,true)
let m = parseInt(q.query.maths)
let s = parseInt(q.query.science)
let h = parseInt(q.query.history) //all the values of the key are in string so we have to convert it into int by using parseInt
let total = parseInt(q.query.outof)
console.log(typeof(total))
console.log(m+s+h)
avg = (m+s+h)/(total*3)
console.log(avg)