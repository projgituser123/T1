
var fs = require("fs")

/*
fs.writeFile("async.txt", "this is data for async function", (err)=>{
    if (err){
        throw err;
    }
    console.log("data written in file successfully...")
})
*/

fs.appendFile("async.txt","\nappending data line1 \nappending data line2", (err)=>{
    if (err){
        throw err;
    }
    console.log("data appended...")
})