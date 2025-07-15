import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

//Event Handler 
wss.on("connection",function(socket){
    console.log("user connected")
    setInterval(()=>{
        socket.send(`Time is : ${new Date().toLocaleTimeString()}`);
    },2000)

    socket.on("message",(e)=>{
        if(e.toString() === 'ping'){
            socket.send('pong');
        }
    })
})

