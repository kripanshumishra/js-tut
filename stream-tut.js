/*
stream extend event emitter base class which simply means we can simply use stream as data and on streams

stream are of following four type :
Writeable
Readable
Duplex  --->> both read and write data sequentially 
Transform--> transform where data can be modified when writing and reading

*/

/*
when we use sync or async method for reading we are pitty much reading whole file at once but in stream we read file in chuncsks

*/

// bydefault it will read 64 kb of data in buffer encoding
// last buffer =remainder
//highwaterMark- control size
//const stream = createReadStream('./content/subfolder/big-data.txt',{highWaterMark : 9000}) will set limit 90 kb
//const stream = createReadStream('./content/subfolder/big-data.txt',{encoding : 'utf8}) 


const {createReadStream} = require('fs')

const stream = createReadStream('./content/subfolder/big-data.txt',{highWaterMark:8000,encoding:'utf8'})

stream.on('data',(result)=>{
    console.log(result)
})
stream.on('error',(err)=>{
    console.log(err)
    console.log('h')
})
