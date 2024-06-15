const path = require('path');

// Ek file path
const filePath = '/users/john/documents/file.txt';

// File path se directory name nikalna
const directoryName = path.dirname(filePath);

console.log('Directory name:', directoryName);
