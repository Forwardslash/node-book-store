const http = require('http');
const server = http.createServer();

//event emitters
// streams
// clusters

server.on('request', (req, res) => {
    res.write("Server Up!\n");
    setTimeout(() => {
        res.write("Still on. ...");
        res.end();
    }, 3000)
});

server.listen(8080);
