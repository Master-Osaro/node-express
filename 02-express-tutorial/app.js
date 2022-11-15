const express = require('express');
const app = express();
let {people} = require('./data');
const peopleRoute = require('./routes/people')
const loginRoute = require('./routes/auth')

//static assets
app.use(express.static('./methods-public'))
//parse form data
app.use(express.urlencoded({extended:false}))
//parse Json
app.use(express.json())
//use peopleRoute
app.use('/api/people', peopleRoute)
//use loginRoute
app.use('/login', loginRoute)



app.listen(5000, ()=>{
    console.log('Server is listening on port 5000...')
})
