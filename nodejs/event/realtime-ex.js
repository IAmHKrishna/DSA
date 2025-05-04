const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
  res.end('Hello World');
});

// Listen for 'request' event
server.on('request', (req, res) => {
  console.log(`New Request received for URL: ${req.url}`);
});

// Listen for 'close' event
server.on('close', () => {
  console.log('Server closed!');
});

// Start server
server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
