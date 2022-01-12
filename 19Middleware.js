// middleware are functions that execute during the request to the server each middleware function has access to req and res object 
// when it comes to its fuctionality sky is the limit. lets hammer this home
//express is just a bunch of middleware function.... its heart and sole of express


//req=>middleWare=> req
const express = require('express')
const app = express()
const {logger} = require('./21logger.js')

/*

// here we are using loagger func at same page and also passing logger fuction manually to app.get method
const logger =(req,res,next)=>{
    const method= req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(`this is method --${method} , this is url-- ${url}, this is time(year) ${time}`)
    next()// passing next method... if we dont do next() then we should send res manually here
}

app.get('/',logger,(req,res)=>{
    res.send('HOME')
})

// app.use('*',(req,res)=>{
    
// })

*/

app.get('/',logger,(req,res)=>{ // we don't want to pass this logger func explicitil so we can use app.all method it will pass the logger function to all the fuction below it
    res.send('HOME')
})

app.get('/about',(req,res)=>{ 
    res.send('about')
})


app.use(logger) // it will pass logger fuction to every method below it.  order matters here
// you could provide path to this use method thats interesting do check it out on your own

app.get('/contant',(req,res)=>{ 
    res.send('contact us')
})
app.get('/find',(req,res)=>{ 
    res.send('find us')
})

app.listen(5000,(req,res)=>{
    console.log('server invoked')
})


