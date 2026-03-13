var fs = require("fs") // always write ("fs") because node.js will fetch or track down the fs module from it..
// fs.writeFileSync("user.txt", "hello dvc!!")
//fs.writeFileSync("user.txt", "UCL R-16\n") // if you try to write in the exisitng file, and it will reqrite or override the data.. 
// if you really want to add the data, you habe to "append" the data and use the below function as well: 
fs.appendFileSync("user.txt", "\ngal vs liv : 1-0")

// let usertxt_data = fs.readFileSync("user.txt") // this LOC will give buffered data
// console.log(usertxt_data, "utf8") // why this buffer data? by default nature, this is binary and hexa decimal data.. to get the string data to be displayed in console, we will encode it first by UTF-8 and then we can print..

let usertxt_data = fs.readFileSync("user.txt", "utf-8")
console.log(usertxt_data)

//fs.renameSync("user.txt","ucl.txt")

fs.copyFileSync("ucl.txt", "copydemo.txt")
fs.writeFileSync("user.txt", "") // to just delete the data from the file, just override the data..
fs.unlinkSync("user.txt")

// to make a folder (with directory)
//fs.mkdirSync("fsd2") // this alone wont do anyhting, add some file in it..
//fs.writeFileSync("fsd2/a.html", "<h1>mkdirSync</h1>") 

//fs.rmdirSync("fsd2") // if you directly write this LOC : directory not empty, rmdir 'D:\dvc\fsd2'
// so you have to empty the file first.. unlink and the rmdirSync
//fs.unlinkSync("fsd2/a.html")
fs.rmdirSync("fsd2")


