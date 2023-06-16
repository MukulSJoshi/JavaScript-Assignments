
const express=require('express')
const path=require('path')
const bodyparser = require('body-parser')
const router =express.Router()
router.use(bodyparser.urlencoded({extended: false}))

router.get('/contact-us',(req,res,next)=>{
    res.sendFile(path.join(__dirname, '..', 'views', 'contact.html'))
})


module.exports=router