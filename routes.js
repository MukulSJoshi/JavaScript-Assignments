const fs= require('fs')

const reqHand = ((req,res)=>{

const url= req.url
const method = req.method

if (url=== '/') {
    res.write('<html>');
    res.write('<body>');
    fs.readFile('message.txt', (err,data)=>{
        if (err) {
            console.log(err);
        }else{
            res.write(`<p>${data}</p>`)
        }
        res.write('<form action="/m" method="post">');
    res.write('<input type="text" name="message">');
    res.write('<button type="submit">Send</button>');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end()
    })        
}
if (url=== '/m' && method=== 'POST') {
    const body=[]
    req.on('data', (chu)=>{
        body.push(chu)
    })
    return req.on('end', ()=>{
        const parsedB = Buffer.concat(body).toString()
        const message= parsedB.split('=')[1]

        fs.writeFile('message.txt', message, (err)=>{
            if (err) {
                console.log(err);
            }
            res.statusCode=302
            res.setHeader('Location', '/')
            res.end()
        })
    })
}
})

//module.exports= reqHand

//module.exports= {ha: reqHand, stext: 'some time '}

exports.ha= reqHand