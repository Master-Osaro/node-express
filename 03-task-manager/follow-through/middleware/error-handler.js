// app.use((err, req, res, next) => {
//     console.error(err.stack)
//     res.status(500).send('Something broke!')
// })
const errorHandlerMiddleware = (err, req, res, next) => {
    console.error(err.stack)
    res.status(500).json({msg:err})
}

module.exports =  errorHandlerMiddleware