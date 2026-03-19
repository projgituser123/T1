const e = require("events")
ee = new e()

/*
function efunc(){
    console.log("event function is fired...");
}
ee.on("estart", efunc ) // we have now binded the function or event handler with our custom event name...
ee.emit("estart") // calling or firing the event from this LOC...
*/

/*
function efunc(a,b, ...c){
    console.log("event function is fired with the parameter... adding a and b = " + (a+b) + " and c = " + c);
}
ee.on("estart", efunc ) // do not pass parameters here, this is for binding and actual syntax
ee.emit("estart", 20,21,67,39,[34,557,87])

*/


// you cannot fire two event in single ee.on() like this :: this is wrong..
/*
function efunc(a,b, ...c){
    console.log("event function is fired with the parameter... adding a and b = " + (a+b) + " and c = " + c);
}
ee.on("estart", efunc, ()=>{
    console.log("event with anonymous function")
})
ee.emit("estart", 20,21,67,39,[34,557,87])
*/


// firing two events now : 
function event1(){
    console.log("EVENT 1");
}
function event2(){
    console.log("EVENT 2")
}
ee.addListener("estart", event1)
ee.on("estart", event2)
//ee.emit("estart")

// ee.removeListener("estart", event1)
//ee.removeAllListeners("estart")
let count = ee.listenerCount("estart")
console.log(count)
ee.emit("estart")

// write a node js script to create a 2 listeners for a common event. print number of events associated with an emitter, remove one of the listener and call the remaining and also print the remaining listner..