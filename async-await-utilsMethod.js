// as we earliar see how to make promises through getText function in last tut async-await-method and promises.js


// utiles module make our task more easy through this module we can make promises very easily

/*
const { readFile,writeFile} = require('fs')
const utils = require('util')

const readFilePromise = utils.promisify(readFile)
const writeFilePromise = utils.promisify(writeFile)

const start = async ()=>{
    try{
   const first= await readFilePromise('./content/subfolder/text.txt','utf-8')
   const second= await readFilePromise('./content/subfolder/text2.txt')
   console.log(`${first} \n this is text2 file--------> \n ${second} \n Second text2 file is showing object Promise just because we have not provided utf-8 enciding`) 
    }
    catch(error){
        console.log(error)
    }
}
start()


//text2 file will show object Promise just because we have not provided utf-8 enciding`

*/



//                      ------->OPTIONAL way<-------

const { readFile,writeFile} = require('fs').promises // here we are overriding readFile and writeFile property keep in    mind it's promises and it was promisify ohk....
const utils = require('util')

const start = async () =>{
    try{
   const first= await readFile('./content/subfolder/text.txt','utf-8')
   const second= await readFile('./content/subfolder/text2.txt')
   await writeFile('./content/subfolder/utils-methodut.txt' , `i am writing this \n ${first} \n ${second}`)

   console.log(`${first} \n this is text2 file--------> \n ${second} \n Second text2 file is showing object Promise just because we have not provided utf-8 enciding`) 
    }
    catch(error){
        console.log(error)
    }
}
start()
//text2 file will show object Promise just because we have not provided utf-8 enciding`