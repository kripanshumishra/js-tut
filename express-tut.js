//app.get
//app.post
//app.put 
//app.delete
//app.use
//app.all


const express = require('express') //  here const express is refrencing toward a express fuction thid whole package is fuction

const app = express() // instace which hold object returned by express func
/* 
const app = require('express')()    // this is same process as above
*/

app.get('/',(req, res)=>{
    res.status(200).send('home page')
})
app.get('/about', (req,res)=>{
    //res.send('about')
    res.status(200).send(`Don't send direct html but the req made by you is \n ${req}`)
    console.log(req)
})

// this middleware has to be at the bottom otherwise it'll get execute in every req
app.all('*',(req,res)=>{
    res.status(404).send(`<h1>resource not found</h1>`)
})


app.listen(5000, ()=>{
    console.log('server is envoked')
})