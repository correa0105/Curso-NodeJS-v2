const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Contenty-Type', 'text/html');
    res.end('<h1>Teste 123 Teste</h1>');
})

server.listen(port, () => {
    console.log("O servidor está rodando em localhost:3000");
})