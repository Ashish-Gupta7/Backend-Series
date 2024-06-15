const path = require('path');

// Ek non-normalized path
const nonNormalizedPath = '/users/john/../documents/file.txt';

// Path ko normalize karna
const normalizedPath = path.normalize(nonNormalizedPath);

console.log('Normalized path:', normalizedPath);


// path.normalize() ek Node.js ka method hai jo diye gaye path ko normalize karta hai. Yani, agar path mein koi bhi redundancies ya inconsistent separators hain, toh yeh use sahi tarike se normalize kar deta hai.