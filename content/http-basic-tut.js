//                  --------HTTP-------
const http = require('http');
 
const server = http.createServer((req,res)=>{
if(req.url === '/'){
    res.end('wlcm to bullshit')
}
res.end('error page not find')

}) // in annonymous function parameter name can be anything not necesseraly it sould be req , res  but it's good practice to have name like this


server.listen(5000)// setting sever and it is arvitary

/*              res.end('wlcm to bullshit') is equvalant to following two lines
                    res.write('wlcm to bullshit');
                    res.end()
*/