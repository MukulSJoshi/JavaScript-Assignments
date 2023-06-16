const path=require('path')
exports.getContactusPage= (req,res)=>{
    res.sendFile(path.join(__dirname, '..', 'views', 'contact.html'))
}

exports.submitForm= (req,res)=>{
    const name= req.body.name 
    const email= req.body.email
    
    res.redirect('/success')

}

exports.getSuccessPage= (req,res)=>{
    res.send('<h1>SUCCESS!</h1>')
}