const fs = require('fs');

// fs.writeFile("newFile.txt", "hello frnd", function(err){
//     if(err){
//         console.log("error hai", err);
//         return;
//     } console.log("file created");
// })

// File ka metadata retrieve karna
fs.stat("newFile.txt", (err, stats) => {
  if (err) {
    console.error('File metadata retrieve karne mein error:', err);
    return;
  } 
//   console.log(stats);

  // Metadata ko print karna
  console.log('File Metadata:');
  console.log('File ka size:', stats.size, 'bytes');
  console.log('File creation date:', stats.birthtime);
  console.log('File modification date:', stats.mtime);
  console.log('File permissions:', stats.mode);
});
