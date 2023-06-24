const express =require('express')
const router=express.Router()
const path=require('path')

router.post('/success',(req,res,next)=>{
    res.send('<h1>SUCCESS!</h1>')
})

module.exports= router