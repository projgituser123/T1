// write a node js script to create a 2 listeners for a common event. print number of events associated with an emitter, remove one of the listener and call the remaining and also print the remaining listner..

const e = require("events")
ee = new e()

function event1(){
    console.log("EVENT 1 fired...")
}
function event2(){
    console.log("EVENT 2 fired..")
}
ee.addListener("estart", event1)
ee.addListener("estart", event2)
console.log("count of listeners = "+ ee.listenerCount("estart"))
ee.removeListener("estart", event1)
ee.emit("estart")

