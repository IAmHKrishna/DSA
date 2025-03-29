const net = require('net');


const client = net.createConnection({ port: 4000 }, () => {
    console.log('Connected to server');
    client.write('Hello from client');
  });

  client.on('connect', () => {
    console.log('Connected to server');
  });

  
  client.on('data', (data) => {
    console.log('Received data:', data.toString());
  });
  
  client.on('end', () => {
    console.log('Connection closed');
  });   
  
  client.on('error', (error) => {
    console.error('Error:', error);
  });
  
  client.on('close', () => {
    console.log('Connection closed');
  });
  
  client.on('disconnect', () => {
    console.log('Connection disconnected');
  });
  
  client.on('timeout', () => {
    console.log('Connection timed out');
  });
     
  client.on('drain', () => {
    console.log('Connection drained');
  });
  
  client.on('lookup', (err, address, family, host) => {
    console.log('Lookup result:', address, family, host);
  });


