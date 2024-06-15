// const fs = require("fs");
// fs.writeFile("myFile.txt", "hello", function(err){
//     if(err){
//         console.log("error hai", err);
//         return;
//     } console.log("file created");
// })

// fs.copyFile("myFile.txt", "newFile.txt", function(err){           // ye nayi file bhi bana deta hai aur jo src file me data hota hai usey destination file me ya nayi file me copy kr deta hai.
//     if(err){
//         console.log("error hai", err);
//         return;
//     } console.log("copied");
// })




// sync => 

// try {
//     fs.copyFileSync("newFile.txt", "syncNewFile.txt");
//     console.log("File copied");
// } catch (error) {
//     console.log("error hai", error);
// }