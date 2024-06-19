import {createServer} from 'node:http';

// Create Http Server
const server = createServer(function(req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end('<h1>We have an HTTP Server</h1>');
});

// Listen for incoming request
server.listen(3000, '127.0.0.1', function() {
    console.log('Server is running');
});

// Normal Function vs Arrow Function
function handleRequest() {}
const handleRequest = () => {}