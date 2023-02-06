const fs = require("fs");
const http = require("http");
const url = require("url");

const port = 3000;

const server = http.createServer((req, res) => {

    const query = url.parse(req.url, true)
    const filename = query.pathname.substring(1)

    if(filename.includes("html")) {

        if(fs.existsSync(filename)) {

            fs.readFile(filename, (err, data) => {
                res.writeHead(200, { "Content-Type": "text/html "})
                res.write(data)
                return res.end()    
            })

        } else {
            
            fs.readFile('404.html', (err, data) => {
                res.writeHead(404, { "Content-Type": "text/html "})
                res.write(data)
                return res.end()    
            })

        }

    } 

})

server.listen(port, () => {
    console.log("O servidor está rodando em localhost:3000");
})