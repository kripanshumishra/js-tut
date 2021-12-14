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


const promiseExample = async()=>{
    try{
        const first= await getText('./content/subfolder/resul-asnch.txt')
        const second= await getText('./content/subfolder/text.txt')
        console.log(`${first} \n ----------->this is tex.txt file<-------\n ${second} \n good job bete`)
    }
    catch(err){
        console.log(err)
    }
}

promiseExample()