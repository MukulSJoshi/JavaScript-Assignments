const express=require('express')
const bodyparser = require('body-parser')

const app = express()
app.use(bodyparser.urlencoded({extended: false}))

app.use('/add-product', ((req,res,next)=>{
    res.send('<form action ="/product" method="POST"><input type ="text" name = "title"><br><input type ="text" name = "size"><button type ="submit">Add</button></form>')
}))

app.use('/product', (req,res,next)=>{
    console.log(req.body.title)
    console.log(req.body.size)
    res.redirect('/')
})

app.use('/', (req,res,next)=>{
    res.send('<h1>WELCOME</h1>')

})

app.listen(3000)