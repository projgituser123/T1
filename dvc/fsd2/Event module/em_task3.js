// write a node js script to fire and event to create, add, read and display the file data on console. use aync functions only.
let fs = require("fs")
let e =  require("events")
ee = new e()
// below is not the optimal code..
/*
function create_write(){
    fdata = "barca vs newcastle = 7:2"
    fs.writeFile("ucl.txt", fdata, (err)=>{
        if (err){
            throw err;
        }
        console.log("file created and data written in it....")
    })
}
function apppend(){
    appdata = "\nbdodglimt vs scp : 5-3 agg"
    fs.appendFile("ucl.txt", appdata,(err)=>{
        if (err){
            throw err;
        } 
        console.log("data is appended..")
    })
}
function display(){
    fs.readFile("ucl.txt", "utf-8", (err, data)=>{
        if(err){
            console.error('Error reading file:', err);
            return;
        }
        console.log("reading the file = " , data)
    })
}

ee.addListener("estart",create_write)
ee.addListener("estart", display)
ee.addListener("estart",apppend)
ee.addListener("estart",display)

ee.emit("estart")

*/

ee.addListener("create_write", ()=>{
    fdata = "barca vs newcastle = 7:2"
    fs.writeFile("ucl.txt",fdata, (err)=>{
        if (err){
            throw err;
        }
        console.log("file created and data written in it....")
        ee.emit("display")
        ee.emit("append")
    })
})
ee.addListener("append",()=>{
    appdata = "\nbdodglimt vs scp : 5-3 agg"
    fs.appendFile("ucl.txt", appdata,(err)=>{
        if (err){
            throw err;
        } 
        console.log("data is appended..")
        ee.emit("display")
    })
})
ee.addListener("display",()=>{
    fs.readFile("ucl.txt", "utf-8", (err, data)=>{
        if(err){
            console.error('Error reading file:', err);
            return;
        }
        console.log("reading the file = " , data)
    })
})
ee.emit("create_write")