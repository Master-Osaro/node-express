const express = require('express');
const app = express();

const logger =(req,res,next)=>{
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method,url,time)
    // res.send('Middleware Test')
    next()
}

// req => middleware => res
app.get('/',logger,(req,res)=>{
    
    return res.send("Home");
})
app.get('/about',logger,(req,res)=>{
    return res.send("About");
})


app.listen(5000, ()=>{
    console.log('Server is listening on port 5000...')
})
