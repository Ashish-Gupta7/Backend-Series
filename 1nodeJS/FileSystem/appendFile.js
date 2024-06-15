// const fs = require("fs");
// fs.writeFile("newFile.txt", "hello world", function(err){
//     if(err){
//         console.log("error hai", err);
//     } console.log("file created");
// })

// fs.appendFile("newFile.txt", "append ke baad hllo world", function(err){
//     if(err){
//         console.log("error hai", err);
//         return;
//     }  console.log("append ho gaya hai");
// })
// JavaScript mein "append file" ka matlab hota hai ek file mein naye data ko add karna, bina pichle data ko overwrite kiye. Isse file mein pehle se maujood data ke saath naye data ko jod diya jata hai.



// sync =>
// try {
//     fs.appendFileSync("newFile.txt", " sync ki madad se append kiya gaya")
//     console.log("appen ho gaya hai");
// } catch (error) {
//     console.log("error hai", error);
// }