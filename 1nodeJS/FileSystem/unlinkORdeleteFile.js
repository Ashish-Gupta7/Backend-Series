const fs = require("fs");
fs.writeFile("myFile.txt", "Hello mitro", function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("file created");
})

// fs.unlink("myFile.txt", function(err){
//     if(err){
//         console.log("Error hai", err);
//         return;
//     }
//     console.log("File deleted");
// })


// ek error bhej kr dekhte hai.
// fs.unlink("myFile123.txt", function(err){
//     if(err){
//         console.log("Error hai", err);
//         return;
//     }
//     console.log("File deleted");
// })



// synchronous unlink 
// try {
//     fs.unlinkSync("myFile.txt")
//     console.log("file deleted");
// } catch (error) {
//     console.log("Error hai", error);
// }







// delete multiple files =>
// // yadi ye teen file exist kare to unko delete krdo. mtlb ye teen file exist krne chahiye.
// const files = ["hee.txt", "hehehaaae.txt", "hehehe.txt"];

// for(const file of files){
//     fs.unlink(file, (err) => {
//         if(err){
//             console.log("error hai", file);
//             return err;
//         } else{
//             console.log("deleted", file);
//         };
//     });
// };