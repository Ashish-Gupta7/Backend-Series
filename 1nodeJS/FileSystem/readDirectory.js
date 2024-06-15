const fs = require("fs");
// fs.readdir("../", function(err, data){
//     if(err){
//         console.log("error hai", err);
//     } console.log("Data is: ", data);
// })



//    __dirname  =>      Bilkul, __dirname ek special variable hai jo Node.js mein uplabdh hota hai. Jab aap koi JavaScript file run karte hain Node.js mein, to __dirname us file ke absolute path ko represent karta hai.
// Jaise agar aapka file C:/Projects/myapp directory mein hai, to __dirname usi directory ka poora path dega, jaise ki C:/Projects/myapp.
// Isse aap apne code mein paths banane mein, files ko read/write karne mein, ya modules ko load karne mein istemal kar sakte hain, aur isse aapka code portable aur adaptable ban jata hai.

//    ../      =>        ../ ek directory navigation ka symbol hai jo UNIX aur UNIX-like operating systems mein istemal hota hai. Yeh symbol ek level up directory ko represent karta hai. ha,are case me abhi hum BACK-END directory me hai isliye ye desktop ke folders ko print kr rha hai.


// sync =>
// let data = [];
// if(fs.existsSync(__dirname)){
//     data = fs.readdirSync(__dirname)
// } else{
//     console.log("directory not exists");
// }
// console.log("data is: ", data);