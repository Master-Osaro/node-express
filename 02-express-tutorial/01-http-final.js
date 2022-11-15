const http = require('http');
const {readFileSync} = require('fs')

// get all files
const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res)=>{
    console.log('user hit the server')
    const url = req.url;

    if (url==='/') {
        console.log(req.url)
        console.log(req.method)
        res.writeHead(200, {'content-type':'text/html'})
        // res.write('<h1>home page</h1>')
        res.write(homePage)
        res.end()
    }
    else if (url==='/about') {
        console.log(req.url)
        console.log(req.method)
        res.writeHead(200, {'content-type':'text/html'})
        res.write("<h1>About page</h1>")
        res.end()
    } 
    else if (url==='/logo.svg') {
        console.log(req.url)
        console.log(req.method)
        res.writeHead(200, {'content-type':'image/svg+xml'})
        res.write(homeImage)
        res.end()
    }
    else if (url==='/styles.css') {
        console.log(req.url)
        console.log(req.method)
        res.writeHead(200, {'content-type':'text/css'})
        res.write(homeStyles)
        res.end()
    }
    else if (url==='/browser-app.js') {
        console.log(req.url)
        console.log(req.method)
        res.writeHead(200, {'content-type':'text/js'})
        res.write(homeLogic)
        res.end()
    }
    else {
        console.log(req.url)
        console.log(req.method)
        res.writeHead(404, {'content-type':'text/html'})
        res.write('<h1>Page not found</h1>')
        res.end()
    }
    
})

server.listen(5000)


