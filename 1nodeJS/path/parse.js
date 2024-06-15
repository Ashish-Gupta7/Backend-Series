const path = require('path');

// Ek file path
const filePath = '/users/john/documents/file.txt';

// Path ko parse karna
const parsedPath = path.parse(filePath);

console.log('Parsed path:', parsedPath);





// Ismein, path.parse() function filePath mein diye gaye path ko parse karta hai aur ek object return karta hai jismein path ke alag-alag parts shamil hote hain. Upar diye gaye output mein:

// root: Path ka root directory ko shamil karta hai (/).
// dir: Path ka directory name ko shamil karta hai (/users/john/documents).
// base: Path ka base name ko shamil karta hai (file.txt).
// ext: Path ka extension ko shamil karta hai (.txt).
// name: Path ka name ko shamil karta hai (file).