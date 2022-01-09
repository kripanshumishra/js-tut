//                  --------HTTP-------

/*

const http = require('http')
 
const server = http.createServer((req,res)=>{
    console.log("user hit the server")
    if(req.url === '/'){
        res.end('wlcm to bullshit n')
    }
    res.end('error page not find')

}) // in annonymous function parameter name can be anything not necesseraly it sould be req , res  but it's good practice to have name like this


server.listen(5000)// setting sever and it is arvitary

                      // res.end('wlcm to bullshit') is equvalant to following two lines
                      // res.write('wlcm to bullshit');
                       // res.end()
    


*/


const http = require('http')


const server = http.createServer((req,res)=>{
    console.log('yes')
    const url = req.url
    if (url ==='/'){
        res.writeHead(200,{'content-type':'text/html'})    
        // res.write("Your IP Addresss is: " + req. socket. localAddress)
        res.write('<h1>fuck love</h1>')
        res.end()
    }
    else{
    
    res.writeHead(404, {'content-type':'text'})
    res.end('page not find')
    }    

})

server.listen(5000)
