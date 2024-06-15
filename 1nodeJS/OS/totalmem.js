const os = require('os');

// Retrieve total system memory
const totalMemory = os.totalmem();

// Print the total system memory
console.log('Total system memory:', totalMemory, 'bytes');
const totalMemoryMB = (totalMemory / (1024 * 1024) + " mb");
console.log("Total system memory in megabytes:", totalMemoryMB);
