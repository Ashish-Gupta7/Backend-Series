// file write synchronous
// const fs = require("fs");
// fs.writeFileSync("newFile.txt", "Hello Friends");
// console.log("File write done");

// in terminal => node .\nodeJs\FileSystem\write&readFile.js 







// file write asynchronous

// const fs = require("fs");
// fs.writeFile("newFile.txt", "Hello Friends", function(err){
//     if(err){
//         console.log("Error hai", err);
//     }   console.log("file created");
// })
// console.log("after writeFile");

// in terminal => node .\nodeJs\FileSystem\write&readFile.js 

// fs.writeFile() ek asynchronous function hai, iska matlab hai ki jab aap ise call karte hain, to yeh background mein chal jata hai aur control turant wapas return ho jata hai, bina wait kiye ki operation pura ho. Isliye, console.log("after writeFile") line turant execute ho jati hai, bina fs.writeFile() ka wait kiye.

// fs.writeFile(file, data[, options], callback) =>
// file: Yeh parameter woh file ka naam hai jismein aap data likhna chahte hain. Jaise ki 'example.txt'.

// data: Yeh parameter woh data hai jo aap file mein likhna chahte hain. Ismein aap koi bhi string, buffer, ya data jo likhna hai use kar sakte hain.

// options (optional): Yeh ek optional parameter hai jo aapko file likhne ke tarike ko customize karne ki anumati deta hai. Aap options object mein encoding, mode, aur flag jaise properties set kar sakte hain.

// callback: Yeh ek function hai jo file likhne ke baad chalaya jata hai. Ismein do parameters hote hain: err (error) aur data (success message). Agar file likhne mein koi error aati hai to err parameter mein error milta hai, warna data parameter mein success message milta hai.





// file read synchronous
// fs.readFileSync(path[, options])

// const fs = require("fs");
// const data = fs.readFileSync("newFile.txt")
// // console.log(data);                 //  ye ascii code me data return karega.
// console.log(data.toString());         //  ye real data return karega.






// file read asynchronous
// fs.readFile(path[, options], callback)
// const fs = require("fs");
// fs.readFile("newFile.txt", function(err, data){
//     if(err){
//         console.log("error hai", err);
//         return;
//     }   
//     // console.log(data);                // same ye bhi ascii code me data return karega.
//     console.log(data.toString());        // aur ye data dega.
// })


// data.toString() ki jagah utf8 ka use kare ye jada accha tareeka mana jata hai. 
// const fs = require("fs");
// fs.readFile("newFile.txt", "utf8", function(err, data){                    // "utf8" encoding specified kiya gaya hai, jisse fs.readFile() string format mein data return karega, aur aapko ASCII code se mukt kar dega.
//     if(err){
//         console.log("error hai", err);
//         return;
//     }   
//     console.log(data);
// })

