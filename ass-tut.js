//                  ------------- ASYNCHRONAS APPROACH to write and read file------------------
//for async we need callback function
const {readFile , writeFile }= require('fs')

readFile('./content/subfolder/text.txt','utf8',(err, result)=>{
    if (err){
        console.log(err);
        return // returns error
    }
    const first = result // setting the result to first varible

    // reading second  file 
    readFile('./content/subfolder/text2.txt','utf8',(err,result)=>{
        if (err){
            console.log(err);
            return // returns error
        }
        const second = result // setting the result to first varible
    

    //for appending the file pass flag argument
    writeFile('./content/subfolder/resul-asnch.txt',`I am writing the result : first file is ${first} and second file is ${second} `,(err,result)=>{
        if (err){
            console.log(err);
            return // returns error
        }
        console.log(result)
        })
    })
})
// if we dont provide utf coding in arrgument of readfile then result will return buffen encoding