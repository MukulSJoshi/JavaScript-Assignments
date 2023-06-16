const express=require('express')
const bodyparser = require('body-parser')
const path=require('path')


const router =express.Router()
router.use(bodyparser.urlencoded({extended: false}))


router.get('/add-product', ((req,res,next)=>{
    res.sendFile(path.join(__dirname, '..', 'views', 'add-products.html'))
}))

router.post('/product', (req,res,next)=>{
    console.log(req.body.title )
    
    res.redirect('/')
})

module.exports=router