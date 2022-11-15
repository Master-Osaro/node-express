const express = require('express');
const app = express();
const logger = require('./logger-middleware')
const authorize = require('./authorize-middleware')

app.use([logger,authorize]);
// req => middleware => res
app.get('/',(req,res)=>{
    console.log(req.user);
    return res.send("Home");
})
app.get('/about',(req,res)=>{
    return res.send("About");
})
app.get('/product',(req,res)=>{
    
    return res.send("Products");
})
app.get('/about',(req,res)=>{
    return res.send("Items");
})


app.listen(5000, ()=>{
    console.log('Server is listening on port 5000...')
})
