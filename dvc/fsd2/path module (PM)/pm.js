var pm = require("path")
var path = "D:/LJ/ucl.html" // this is a static path inserted..
console.log(pm.basename(path))
console.log(pm.dirname(path))
console.log(pm.extname(path))
console.log(pm.parse(path))
console.log(pm.parse(path).name)
console.log("==================================")
var fs = require("fs")
fs.mkdirSync(pm.dirname(path))
if(pm.extname(path) == ".txt"){
    fs.writeFileSync(path, "this is a txt file...")
}
else{
    fs.writeFileSync(path, '<h1 style = "color : blue">this is a html file<h1>')
}