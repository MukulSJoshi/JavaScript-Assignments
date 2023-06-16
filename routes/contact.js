
const express=require('express')
const path=require('path')
const bodyparser = require('body-parser')
const router =express.Router()
const contactcontroller = require('../controllers/contactcontroller')

router.use(bodyparser.urlencoded({extended: false}))

router.get('/contact-us',contactcontroller.getContactusPage)
router.post('/contact-us',contactcontroller.submitForm)
router.get('/success',contactcontroller.getSuccessPage)

module.exports=router 