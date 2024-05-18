import { Server } from "socket.io";
import http from "node:http";
import express from "express";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
    console.log("a user connected");
    socket.on("disconnect", () => {
        console.log("user disconnected");
    });
});

server.listen(3002, () => {
    console.log("listening on localhost:3002");
});
