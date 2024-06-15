const path = require('path');

// Example usage of path.join()
const joinedPath = path.join('/users', 'john', 'documents', 'file.txt');

console.log('Joined path:', joinedPath);


// path.join() method Node.js mein istemal hota hai multiple path segments ko ek normalized path mein join karne ke liye. Ismein kai path segments arguments ke roop mein liye jaate hain aur ek concatenated path string return kiya jaata hai.

// Read resolve.js and readme.md