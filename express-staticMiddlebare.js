//general convention is, we put static file inside public folder
// in express we need not to explictly call all the req needed in public folder like in http module in express we can use app.use method

const express = require('express')
const app = express()
const path = require('path')

app.listen(5000,()=>{console.log('server invoked')})


app.get('/home',(req,res)=>{
    res.send('this is home')
})

console.log('beside the server')

/*

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'public','index.html')) // here we are only supposed to pass absoulute path
}) // for static folder we aren't even supposed to send file just put it any folder but make sure it shoud named as index.html (common convention is putting it in public folder) and use app.all method ........

// for server js is also static... js is dynamic for browser just coz server didn't set it dynamic..
// there are dynamic template for them we use template render 

*/

app.use(express.static('./public'))


app.all('*',(req,res)=>{
    res.status(404).send('<h1> page not find</h1>')
})// we need to put it at the end just above app.listen otherwise whatsoever req server will made it will fall under this category and will show page not found