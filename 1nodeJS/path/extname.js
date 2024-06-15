const path = require('path');

// File ka path
const filePath = '/path/to/your/file.txt';

// Extension name nikalna
const extensionName = path.extname(filePath);
const dirName = path.dirname(filePath);


console.log('Extension name:', extensionName);
console.log('dir name:', dirName);


// Agar file ka extension nahi hota hai, yaani agar file name ke end mein koi . nahi hota hai, toh path.extname() empty string '' ko return karta hai.

