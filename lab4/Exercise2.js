//const si = require('systeminformation');
const os = require('os');


console.log('Checking your system...');

console.log(os.cpus().length);
console.log(os.totalmem());

