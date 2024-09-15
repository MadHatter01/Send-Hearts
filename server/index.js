const express = require("express");

const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const server = http.createServer(app);

app.use(cors());

const io = new Server(server, {
    cors:{
        origin:"http://localhost:5173",
        methods : ["GET", "POST"],
    },
});


let reactions = {};
io.on("connection", (socket)=>{
    console.log(`user connected: ${socket.id}`);
    socket.on("send_reactions", (emoji)=>{
        reactions[emoji] = (reactions[emoji] || 0) + 1; 
        io.emit("reaction_display", reactions);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
      });
})


server.listen(3001, ()=>{
    console.log("Server is Running");
});

