const http = require("http")


const server = http.createServer((req, res) => {
if (req.url === '/') {
    res.end("this is the homepage")
}
if (req.url === '/about') {
    res.end("this is my about page")
}

res.end(`
    <h1> Opps!!!</h1>
    <p> We can not find the page you're looking for</p>
    <a href="/">Go back to home</a>
    `)
})

server.listen(5000)