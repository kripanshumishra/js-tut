//                  -------------SYNCHRONAS APPROACH----------------
//                        * read file *
//calling to method same time from fs module we can call them seprately too
const {readFileSync, writeFileSync } = require('fs') 
const first = readFileSync('./content/subfolder/text.txt', 'utf8')
const second = readFileSync('./content/subfolder/text2.txt', 'utf8')
console.log(first,second)

//                      * write *
writeFileSync('./content/subfolder/result-sync.txt',`I am writing the result : first file is ${first} and second file is ${second} `)  // this will overriding all the content in file and if there is no file such name  then it will create that name  for appending the file pass one more arrgument flag


writeFileSync('./content/subfolder/result-sync.txt',`\n this is append `, {flag : 'a'})  // flag this will append