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
        console.log('error dinna come')

    //for appending the file pass flag argument
    writeFile('./content/subfolder/resul-asnch.txt',`I am writing the result : first file is ${first} and second file is ${second} `,(err,result)=>{
        if (err){
            console.log(err);
            return // returns error
        }
        console.log(result)
        })
        console.log("write \n")
    })
    console.log("i am 2first call back \n")
})
// if we dont provide utf coding in arrgument of readfile then result will return buffen encoding
console.log("first \n")


/* one little excersise for you try to predict the order of execution of code */

// try to use if condition in async so that you can catch it and error handling should be in sync way(use if condition) so that you catch them otherwise it's no use of it..