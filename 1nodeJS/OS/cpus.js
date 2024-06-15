const os = require('os');

// // CPU ki information ko retrieve karna
const cpuInfo = os.cpus();
// console.log(cpuInfo);

// // CPU ki har core ki information ko print karna
cpuInfo.forEach((cpu, index) => {
    console.log(`CPU ${index + 1}:`);
    console.log(`Model: ${cpu.model}`);
    console.log(`Speed: ${cpu.speed} MHz`);
    console.log(`Times:`);
    console.log(`  user: ${cpu.times.user}`);
    console.log(`  nice: ${cpu.times.nice}`);
    console.log(`  sys: ${cpu.times.sys}`);
    console.log(`  idle: ${cpu.times.idle}`);
    console.log(`  irq: ${cpu.times.irq}`);
    console.log();
});
