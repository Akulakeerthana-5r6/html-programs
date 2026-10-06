const http = require("http");
const os = require("os");
const path = require("path");
const eventEmitter = require("events");
//os Module
console.log("platform:", os.platform());
console.log("Free Memory", os.freemem());
//path Module
console.log("File Name", path.basename(__filename));
//event Module
const event = new eventEmitter();
event.on("Welcome",()=>console.log("welcome Event Triggered!"));
//http Module
const server=http.createServer((req,res)=>{
    event.emit("Welcome");
    res.end("Hello! Welcome to Node.js Server");
});
server.listen(3000,()=>{
    console.log("Server running at http://localhost:3000");
});