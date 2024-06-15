const path = require('path');

// Ek file path
const filePath = '/users/john/documents/file.txt';

// File path se basename nikalna
const fileName = path.basename(filePath);

console.log('Basename:', fileName);
