const os = require('os');

// Retrieve network interface information
const networkInterfaces = os.networkInterfaces();

// Print the network interface information
console.log('Network Interfaces:', networkInterfaces);
