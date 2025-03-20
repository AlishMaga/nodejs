const http = require('http');
const app = require('./src/config/express.config');

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/plain'})
//     res.write('Hello World!')
//     res.end()
// })

const server = http.createServer(app);

const PORT = 3001
const HOST = 'localhost'

server.listen(PORT, HOST, (err) => {
    if(!err) {
        console.log(`Server is running on http://${HOST}:${PORT}`)
    }
})
