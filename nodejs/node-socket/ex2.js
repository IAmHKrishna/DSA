const http = require("http")
const express = require("express")
const app = express()
const socket = require("socket.io")

const server = http.createServer(app)

const io = socket(server)//(3000)

io.on("connection",(event)=>{
    event.on("message",(msg)=>{
        console.log(msg)
    })
})

server.listen(3099,()=>{
    console.log("listen on 3099")
})