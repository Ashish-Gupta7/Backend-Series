const os = require('os');

// Free memory ka amount retrieve karna
const freeMemory = os.freemem();
console.log(freeMemory);       // in bytes

// Free memory ka amount ko bytes se megabytes mein convert karna
const freeMemoryMB = freeMemory / (1024 * 1024);
console.log(freeMemoryMB);

console.log(`Available Free Memory: ${freeMemoryMB.toFixed(2)} MB`);
