const fs = require("fs");
fs.writeFile("myFile.txt", "Hello Friends", function(err){
    if(err){
        console.log("error hai", err);
        return;
    } else{
        console.log("file created");
    }
})


// console.log("before renamed");
// fs.renameSync("myFile.txt", "renamed.txt")
// console.log("after renamed");

// aap ise aur acche se error ke liye likh skte hai try aur catch ya phir if-else lagakr existSync ki madad se.


// async =>
// fs.rename("myFile.txt", "myFile.txt", function(err){
//     if(err){
//         console.log("error hai", err);
//         return;
//     } else {
//         console.log("rename ho gaya");
//     }
// })

fs.access('myFile.txt', (err) => {
    if (err) {
        console.error('File does not exist');
        return;
    }
    fs.copyFile('myFile.txt', 'myFile.txt', (err) => {
        if (err) throw err;
        console.log('File copied!');
    });
});