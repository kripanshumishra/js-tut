// api meaning in express --> it sends json data here we use res.json() method to render the the data at client side 
// ssr --> it send template and we use res.render() method, it is server side rendering


//          ------->API- tut<--------

/*

const express = require('express')
const app= express()

app.get('/', (req,res)=>{
    res.status(200).json([{name:'kripanshu'},{name:'aakash'}]) // rea.json() takes js object or js array of obj (in our example we send array of js obj) and send json data as responce
})


app.listen(5000, ()=>{
    console.log('server invoked');
}) 


*/




//              importing js object form other module (from data.js folder)

/*
const express = require('express')
const { redirect } = require('express/lib/response')
const app= express()
const {product}= require('./data.js') // here we are only importing product out of two object product and person in data.js module which we export ther

app.get('/',(req,res)=>{
    res.json(product) // this is sending whole product array in below example i'll show how to send specific key of obj array project
})

app.listen(5000,()=>{
    console.log('server invoked')
})
                                  

*/




/*

//              sending only specific keys of obj of array product form data.js folder

const express = require('express')
const app = express()
const {product} =  require('./data.js') // importing only product array

app.get('/',(req,res)=>{
    res.status(200).send('<h1>wana see data</h1> <a href="/data.json"> click here </a>')
})


app.get('/data.json', (req, res)=>{
    
        const newProduct = product.map((pro)=>{
            let {id , name } = pro;
          return {id , name}
        })
        res.json(newProduct)
    }
)


app.listen(5000,()=>{
    console.log('sever invoked')
})


*/



/*

//                      sending specific obj of array (our case, we are sending obj wid id 1 in product array)

const express = require('express')
const app = express()
const {product}= require('./data.js')
app.get('/',(req,res)=>{
    res.status(200).send("<a href='./api/product/1'>click here to get id =1 data</a>")

})
app.get('/api/product/1',(req,res)=>{
    const singleProduct = product.find(product=>product.id === 1) // will return obj with id 1
    res.json(singleProduct)

}
)
app.listen(5000, ()=>{
    console.log('server invoked')
})

*/




//                  instead hard coding every product id, setting up route parameter

//              :productID is route parameter------> instead of writing productID you can write whatever you want

const express = require('express')
const app = express()
const {product}= require('./data.js')

app.get('/',(req,res)=>{
    res.status(200).send("<h5>this is home page</h5> <a href='./api/product/1'> clickhere to go routed parameter id =1</a> <br> <a href='./api/product/2'> clickhere to go routed parameter id =2</a> <br> <a href='./api/product/3'> clickhere to go routed parameter id =3</a> <br> <a href='./api/product/4'> clickhere to go routed parameter id =4</a>")
})

app.get('/api/product/:productID',(req,res)=>{  //:productID is route parameter------> instead of writing productID you can write whatever you want
    console.log(req.params) // req.params value is the value kindda placeholder in link (in our case req.params value is the value of productID)

    const {productID}= req.params  //object destructuring
    // req.productID = req.params //either write above line or this line both are correct but remember if you are writing this then replace number(productID) to number(req.productID) in line 128

    
    const productResponse = product.find(x=> x.id === Number(productID)) // req.params is string coz link is always a string thats why we type cast it in number


    if (!productResponse){  
        return res.status(404).send('product didn\'t find')
    }
    return res.json(productResponse)
})

app.listen(5000, ()=>{
    console.log('server invoked')
})

app.get('/api/product/:productID/reviews/:reviewID',(req,res)=>{
    console.log(req.params)
    const {productID,reviewID}= req.params
    res.send("<h1>Namastey world</h1>")
})

// query url
app.get('/api/query',(req,res)=>{ // query will take the query made by you... you can use/write anything instead of query
    console.log(`this is req.query object \n ${req.query}`) // this will log the obj according to your query for example go to url "http://localhost:5000/api/query?search=a&limit=2" it will console log a object with keys search and limit with values a,2 respectively
    res.send('namastey world')
})

app.get('/api/v1/query',(req,res)=>{
    let {search,limit}=req.query // obj leteral
    // console.log(name+"\t this is limit -->"+limit)
    let sorted_product =[...product]  // copy product array in sorted_product, (...)it is spread operator
    if(search){ // it means if there is name in req.query 
        sorted_product = sorted_product.filter((product)=>product.name.startsWith(search)) // name.startWith(search) will return all the name start with our search
        // console.log(sorted_product.length)
    }
    if(limit){ // it means if there is name in req.query 
        sorted_product = sorted_product.slice(0,Number(limit))
    }
    if(sorted_product.length<1){
        // console.log('s')
        return res.status(200).json({sucess:true, data:[]}) // here we are setting status as 200 coz there is nothing wrong with req and we are sending respond which is emptpy array 
        // res.json takes js object keep in mind array too are object
    }
    return res.json(sorted_product)
})

