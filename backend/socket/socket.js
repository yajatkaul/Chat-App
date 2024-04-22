import { Server } from "socket.io"
import http from 'http'
import express from 'express'

const app = express();

const server = http.createServer(app);
const io = new Server(server,{
    cors:{
        origin:["http://localhost:3000"],
        methods:["GET","POST"]
    }
})

const userSocketMap = {};  //{userId : socketId}

io.on('connection',(socket) => {
    

    const userId = socket.handshake.query.userId
    if(userId != "undefined") userSocketMap[userId] = socket.id;
    console.log("a user connected",socket.id)

    //io.emit() is used to send events to all connected clients
    io.emit("getOnlineUsers",Object.keys*userSocketMap);

    socket.on("disconnect",() =>{
        
        delete userSocketMap[userId];
        io.emit("getOnlineUsers",Object.keys*userSocketMap);
        console.log("User disconnected",socket.id)
    })
})

export {app,io,server}