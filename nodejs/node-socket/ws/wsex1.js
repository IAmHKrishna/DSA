const webSocket = require('ws');


// Create WebSocket server
const wss = new webSocket.Server({port:8081})

console.log("WebSocket server running on ws://localhost:8081");


// Handle socket connection
wss.on('connection',(ws)=>{
    console.log("Client connected");

    // Send message to client from server
    ws.send("Hello from server");


    // Receive message from client
    ws.on('message',(message)=>{
        console.log("Received message:",message.toString());

        // Broadcast message to all clients
        wss.clients.forEach((clients)=>{
            clients.send(message)
        })
    })

    ws.on('close',()=>{
        console.log("Client disconnected");
    })

    ws.on('error',(error)=>{
        console.error("WebSocket error:",error);
    })
    
})