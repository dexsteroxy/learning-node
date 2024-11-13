const os = require("os")

const user = os.userInfo()
console.log(user);


//for checking system uptime


console.log(`the system uptime is ${os.uptime()} seconds`);


const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem()
}

console.log(currentOS);
