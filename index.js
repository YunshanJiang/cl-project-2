let express = require("express");
let app = express();
app.use("/", express.static ("public"));

//create the http server 
let http = require("http");
let server = http.createServer(app)

//setup socket connections
let io = require("socket.io");
io = new io.Server(server)

//listen for connections
io.sockets.on("connection", (socket)=> {
    console.log("New client, Yay!", socket.id);

//".on" getting "data", "emit" to all C
socket.on("data", (data) => {
    console.log("data");
    io.sockets.emit("dataFromServer", data);
})


    //listen for when socket disconnects
socket.on("disconnect", () => {
    console.log("disconnect : ", socket.id)
    })
})



//run the app on port 4000
let port = process.env.PORT || 4000;
server.listen("4000", () => {
    console.log("server on port 4000");
})