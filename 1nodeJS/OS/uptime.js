const os = require('os');

// Retrieve the system uptime
const uptimeSeconds = os.uptime();

// Convert uptime from seconds to a more human-readable format
const uptimeHours = Math.floor(uptimeSeconds / 3600);
const uptimeMinutes = Math.floor((uptimeSeconds % 3600) / 60);
const uptimeSecondsRemaining = uptimeSeconds % 60;

// Print the system uptime
console.log(`System Uptime: ${uptimeHours} hours, ${uptimeMinutes} minutes, ${uptimeSecondsRemaining} seconds`);


// The os.uptime() function returns the number of seconds the system has been running. This information can be useful for various purposes, such as monitoring system performance or displaying system information in an application.
// os.uptime() function Node.js mein total system uptime ko seconds mein return karta hai. Yani, yeh function total seconds mein wapas karta hai jis time se system start hua hai ya restart hua hai. Iska matlab yeh hai ki yadi aap os.uptime() ko call karte hain aur agar uska return value 3600 hai, to iska matlab hai ki system ko exactly 1 ghanta ya 3600 seconds ka samay ho chuka hai since last restart ya boot hone ke baad.