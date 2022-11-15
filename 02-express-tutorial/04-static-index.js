const express = require('express')
const path = require('path')
const app = express();

//setup static and middleware
app.use(express.static('./public'))

// app.get('/', (req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
//    # added file to static directory
// })
app.all('*', (req,res)=>{
    res.status(400).send('server is listening on port 5000')
})
app.listen(5000, ()=>{
    console.log('server is listening on port 5000')
})