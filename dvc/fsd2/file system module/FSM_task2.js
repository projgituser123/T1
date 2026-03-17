// write a file with json object having key name and place, read the file and display user's name in console.
let jsonstr = '{"name" : "dvc", "place" : "amd"}'
var fs = require("fs")
fs.writeFileSync("task2.txt", jsonstr)
let json_filedata = fs.readFileSync("task2.txt","utf-8")
let jsonobj = JSON.parse(json_filedata)
console.log(jsonobj)
console.log(jsonobj.name)


// method 2 : 
/*
var fs = require("fs")
let json = {name : "dvc" , place : " surat"}
fs.writeFileSync("task2.txt", JSON.strungify(json))
let json_data = fs.readFileSync("task2.txt","utf-8")
console.log(JSON.parse(json_data).name)
*/