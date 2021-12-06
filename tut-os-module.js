const os = require('os')
// info about current user
const user = os.userInfo()


// method returns the system uptime(kab se system start hai) in seconds
console.log(`the system uptime is ${os.uptime()} seconds`)

const currentOs={
name : os.type(),
release: os.release(),
freeMem : os.freemem(),
totalMem : os.totalmem()
}
console.log(currentOs)