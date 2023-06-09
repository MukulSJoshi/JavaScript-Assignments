const http =require('http')
const routes = require('./routes')

const app= http.createServer(routes.ha)

app.listen(3000, ()=>{
    console.log('run');
})