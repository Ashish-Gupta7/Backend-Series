// jise export kiya jata hai usey require nhi krte hai wo jis file me likha hota hai usey require krte hai. jab kisi file ko require kete hai to usey single ya double qoutes me likhte hai.

// 1st =>

// const ash = require('./script1');     // ye import krne ka tareeka hai.
// console.log(ash);         // terminal me "    node '.\BasicsOfBack-End\import&export\script2.js'    " ye likhne pr ash pr jo data aaya hai wo print hoga.







// 2nd => 
// var out = require("./script1");
// console.log(out);            // object ke ander jo bhi tha sb dikhne lagega.

// console.log(out.qwe);        // output => { name: 'ash', dob: 123444 }

// console.log(out.qwe.name);   // output => ash

// console.log(out.asd);








// 3rd => 
var out = require("./script1");
// console.log(out);        

// console.log(out.obj);     

// console.log(out.obj.name);   

// console.log(out.fnc);

// console.log(out.arr);
