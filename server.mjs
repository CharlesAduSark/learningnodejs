import { createServer } from 'node:http';
import { unlink } from "node:fs";

// Create Http Server
const server = createServer((req, res) => {
    console.log(req.url);
    if (req.url.includes('create')) {
        // create file
        writeFile('./abc.html', '<h1>Learning Node.js</h1>', (err) => {
            console.log(err);
            // return response
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<h1>We have an HTTP Server</h1>');
        });    
    } else {
        // Delete file
        unlink('./index.html', () => {
            // Return response
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<h1>File</h1>');
        });
    }    
});


// Listen for incoming request
server.listen(3000, '127.0.0.1', function () {
    console.log('Server is running');
});

// Normal Function vs Arrow Function
// function handleRequest() { }
// const handleRequest = () => { }