// write node js code to handle the events asked below : 1. check the radius is negative or not, if so then display msg "radius must be positive" else display perimeter of circle...2. check the side is -ve or not, if so then display("side must be +ve") else display the perimeter of square... FIRE ON CONDITIONS ONLY..

let e = require("events")
ee =  new e()

ee.addListener("rnegative", ()=>{
    console.log("radius must be positive");
})
ee.addListener("snegative", ()=>{
    console.log("side must be positive");
})
ee.addListener("eval",(radius, side)=>{
    if (radius<0){
        ee.emit("rnegative")
    }
    else{
        circum = 2*Math.PI*radius
        console.log("ciircumference of the circle is = " + circum);
    }
    if (side<0){
        ee.emit("snegative")
    }
    else{ 
        peri = 4*side
        console.log("perimeter of the sq= "+ peri)
    }
})
ee.emit("eval", -10,5)