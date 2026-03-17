// write the node js script to write text (you are create a file) to help.txt file after that add data "new" to the same file  after data read the data and priont on console after finiesh read opration print thank you in console write apppen ,read,print seq mentain all this opration are async.

var fs = require("fs")
data = "for ambulance call 108.."
/*
fs.writeFile("help.txt", data, (err)=>{
    if (err){
        throw err;
    }
    console.log("file and data both created.")
})
*/
/*
new_data = "\nnew data = call 100 for police..."
fs.appendFile("help.txt", new_data, (err)=>{
    if (err){
        throw err;
    }
    console.log("new data is appended...")
})
    */
/*
fs.readFile("help.txt", "utf-8", (err, data)=>{
    if(err){
        throw err;
    }
    else{
        console.log("reading the help.txt file below = ")
        console.log(data)
    }
})
*/


// here we are trying to force async function to perform a particular synced task, so instead of write async function indiviually and commenting the previous code , you can use the callback function and use this parameter to perform your desired task, so the code is reduced to one single code.
// so we can say that callback function is useful to sync the task in our custom way via using the async function

fs.writeFile("help.txt", data, (err)=>{
    if (err){
        throw err;
    }
    console.log("file and data both created.")

    new_data = "\nnew data = call 100 for police..."
    fs.appendFile("help.txt", new_data, (err)=>{
        if (err){
            throw err;
        }
        console.log("new data is appended...")

        fs.readFile("help.txt", "utf-8", (err, data)=>{
            if(err){
                throw err;
            }
            else{
                console.log("reading the help.txt file below = ")
                console.log(data)
            }
        })
    })    
})