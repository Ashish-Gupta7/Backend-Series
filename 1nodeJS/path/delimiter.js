const path = require('path');

// Path delimiter ko print karna
console.log('Path delimiter:', path.delimiter);




// path.delimiter ek Node.js ka property hai jo current operating system ke path segment delimiters ko represent karta hai. Yeh property different operating systems ke liye alag-alag value return karta hai.

// Unix-like Systems (Linux, macOS):
// path.delimiter Unix-like systems mein : ko represent karta hai.

// Windows:
// path.delimiter Windows mein ; ko represent karta hai.
// Yeh delimiters environment variables ke multiple values ko separate karne ke liye istemal hote hain, jaise ki PATH environment variable mein multiple directories ko separate karne ke liye Unix-like systems mein : aur Windows mein ; ka use hota hai.