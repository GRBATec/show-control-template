import { Server } from "socket.io";
import * as http from "node:http";
import * as express from "express";

const app = express();
const frontend_path = process.env.FRONTEND!;
console.log("using", frontend_path);
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
    console.log("a user connected");

    socket.on("set_timer", (time) => {
        console.log("setting timer", time);
        // TODO: broadcast the time to all clients
    });

    socket.on("set_text", (text) => {
        console.log("setting text to", text);
        // TODO: broadcast the text to all clients
    });

    socket.on("beamer/no-content", () => {
        console.log("beamer/no-content");
        // TODO: broadcast the event to all clients
    });

    socket.on("beamer/show-clock", () => {
        console.log("beamer/show-clock");
        // TODO: broadcast the event to all clients
    });

    socket.on("beamer/show-timer", () => {
        console.log("beamer/show-timer");
        // TODO: broadcast the event to all clients
    });

    socket.on("beamer/plain-text", () => {
        console.log("beamer/plain-text");
        // TODO: broadcast the event to all clients
    });

    socket.on("beamer/grb-text", () => {
        console.log("beamer/grb-text");
        // TODO: broadcast the event to all clients
    });

    socket.on("beamer/atec-text", () => {
        console.log("beamer/atec-text");
        // TODO: broadcast the event to all clients
    });

    socket.on("disconnect", () => {
        console.log("user disconnected");
    });
});

app.use(express.static(frontend_path));

server.listen(3002, () => {
    console.log("listening on localhost:3002");
});
