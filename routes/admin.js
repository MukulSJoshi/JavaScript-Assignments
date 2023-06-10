const express=require('express')
const bodyparser = require('body-parser')


const router =express.Router()
router.use(bodyparser.urlencoded({extended: false}))


router.get('/add-product', ((req,res,next)=>{
    res.send('<form action ="/product" method="POST"><input type ="text" name = "title"><br><input type ="text" name = "size"><button type ="submit">Add</button></form>')
}))

router.post('/product', (req,res,next)=>{
    console.log(req.body.title )
    console.log(req.body.size)
    res.redirect('/')
})

module.exports=router