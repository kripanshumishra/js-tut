// logger file

const logger =(req,res,next)=>{
    const method= req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(`this is method --${method} , this is url-- ${url}, this is time(year) ${time}`)
    next()// 
}

module.exports = logger;