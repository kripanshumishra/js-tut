/* promise can we in three state 
pending, fulfilled, rejected */



const delay=(time)=> {
    return new Promise((resolve,reject)=>{
    if(isNaN(time)){
        reject(new Error('enter valid no.'))
    }
    setTimeout(resolve,time)

})
}
delay(78).then(()=> console.log('hlo')).catch((err)=>console.log(err))
console.log(delay(600))

//                  -------EXAMPLE 2----------

const { readFile } = require('fs')


const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {             
                reject(err)           
            }
            else{
                console.log('resolve data')
                resolve(data)
            }
        })
    })
}
getText('./content/subfolder/resul-asnch.txt')
    .then(result => console.log(result))
    .catch(err => console.log(err))