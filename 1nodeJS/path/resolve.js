const path = require('path');

const resolvedPath = path.resolve('/users', 'john', 'documents', 'file.txt');

console.log('Resolved path:', resolvedPath);

// path.resolve() method Node.js mein istemal hota hai ek absolute path ko resolve karne ke liye, yani ki ek ya multiple path segments ko ek absolute path mein convert karne ke liye. Yeh method multiple arguments ke roop mein paths ko accept karta hai aur unhe ek normalized absolute path mein convert karke return karta hai. 

// Agar aap ek normalized path chahiye, to aap path.join() ka istemal karein, aur agar aap ek absolute path chahiye, to aap path.resolve() ka istemal karein.