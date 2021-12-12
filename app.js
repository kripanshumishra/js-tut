
//IMP NOTE ==>   __dirname is global variable ==> function can be a variable as it stores vlaues. int, float are kidda function ==> function and classes can be call as meathod 

const { reject } = require("lodash")

// int is class and almost all classes are called as function
// global variable are those which can be excessed by anywhere in project 
//__dirname returns current working directory
//console is also global method
//every file is module in node


//              ----------NPM-------------


//npm calls reusable code as package another names are modules and dependences. all three can use interchangeable
// when we install npm we automatically install npm(node package manager ) so we have access to npm global command 


// dev dependence are those which are used only for devlopment



//local dependency - use it only in this particular project kindda virtual env type in python 
//  npm i <packageName>



//global dependency - use it only in any project 
//  npm install -g <packageName>
// sudo npm install -g <packageName>   (for mac)


// for uninstalling the package run command----->> npm uninstall <packagename>

//package.json -manifest file (stores important info about project/package)
// manual approach to set it (create package.json in the root, create properties etc)
// second approach --- npm init (step by step , press enter to skip)
// third ----> npm init-y (everything default) 


// const _ = require('lodash')
// const items = [1,[2,[3,[4,5]]]]
// const newItems = _.flattenDeep(items)
// console.log(newItems)
// console.log('hey peoples')

/*
 
const {readFile} = require('fs');

readFile('./content/subfolder/resul-asnch.txt', 'utf8', (err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
})
*/
