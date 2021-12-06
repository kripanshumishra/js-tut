const path = require('path');

// checking for seprator(in my case it's "/") in system

console.log(path.sep)

//join the path 

const filePath= path.join('/content','subfolder','text.txt')
console.log(filePath)

const base= path.basename(filePath)
console.log(`i'm base => ${base}`)

// absolute path 
const absolute= path.resolve(__dirname,'content', 'subfolder','text.txt')
console.log( `absolute link ===> ${absolute}`)
//IMP NOTE ==>   __dirname is global variable ==> function can be a variable as it stores vlaues. int, float are kidda function ==> function and classes can be call as meathod 

// int is class and almost all classes are called as function
// global variable are those which can be excessed by anywhere in project 
//__dirname returns current working directory
//console is also global method
//every file is module in node