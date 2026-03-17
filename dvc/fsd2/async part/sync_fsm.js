// write a code to create a folder name node folder .. create one file "write.txt" having data hello. append some data to the same file and read the data from the same file and display the file content on the console... rename the file with write1.txt after that delete the folder node. all methods to be in synchronous method.
var fs = require ("fs")
fs.mkdirSync("node")
write_data = "some data in write.txt original..."
fs.writeFileSync("node/write.txt", write_data)
app_data = "\nappended data to original file write.txt "
fs.appendFileSync("node/write.txt",app_data)
console.log(fs.readFileSync("node/write.txt", "utf-8"))
fs.renameSync("node/write.txt","node/write11.txt")
fs.unlinkSync("node/write11.txt")
fs.rmdirSync("node")