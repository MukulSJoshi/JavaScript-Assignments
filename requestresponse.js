const { log } = require('console')
const http = require('http')
const app= http.createServer((req,res)=>{
    const url = req.url
    if (url=== '/home') {
        res.write('Welcome home')
    }else if (url=== '/about') {
        res.write('welcome to about us page')
    }else if (url === '/node') {
        res.write('welcome to nodejs project ')
    }else{
        res.write('Error')
    }
    res.end()
})
app.listen(3000,()=>{
    console.log('running');
})
