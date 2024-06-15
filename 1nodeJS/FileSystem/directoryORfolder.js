// const fs = require("fs");

// try {
//     // Agar "folder" naam ka directory exist nahi karta hai, to naya directory "folder" create karein
//     if (!fs.existsSync("folder")) {                  // fs.existsSync(path) ek synchronous function hai jo path ko check karta hai ki kya woh exist karta hai ya nahi. Agar path exist karta hai, to yeh true return karta hai, aur agar path exist nahi karta hai, to yeh false return karta hai.
//         fs.mkdirSync("folder");
//         console.log("Folder created");
//     } else {
//         // Agar "folder" naam ka directory pehle se hi maujood hai, to "folder phle se hi bana huaa hai" ka message print karein
//         console.log("folder phle se hi bana huaa hai");
//     }
// } catch (error) {
//     // Koi error aaye to use handle karein aur "Error hai" message print karein
//     console.log("Error hai", error);
// }
// // "after mkdir" message print karein
// console.log("after mkdir");







// async =>
// const fs = require("fs");

// let folder = "folders";

// if(!fs.existsSync(folder)){
//     fs.mkdir(folder, (err) =>  {
//         if(err){
//             console.log("error hai");
//             return err;
//         } else{
//             console.log("folder created");
//         }
//     });
// } else{
//     console.log("folder exists");
// };