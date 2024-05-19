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
        socket.broadcast.emit("beamer/set_timer", time);
    });

    socket.on("set_text", (text) => {
        socket.broadcast.emit("beamer/set_text", text);
    });

    socket.on("beamer/no-content", () => {
        socket.broadcast.emit("beamer/view/no-content");
    });

    socket.on("beamer/show-clock", () => {
        socket.broadcast.emit("beamer/view/show-clock");
    });

    socket.on("beamer/show-timer", () => {
        socket.broadcast.emit("beamer/view/show-timer");
    });

    socket.on("beamer/plain-text", () => {
        socket.broadcast.emit("beamer/view/plain-text");
    });

    socket.on("beamer/grb-text", () => {
        socket.broadcast.emit("beamer/view/grb-text");
    });

    socket.on("beamer/atec-text", () => {
        socket.broadcast.emit("beamer/view/atec-text");
    });

    socket.on("disconnect", () => {
        console.log("user disconnected");
    });
});

app.use(express.static(frontend_path));

server.listen(3002, () => {
    console.log("listening on localhost:3002");
});
