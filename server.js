const express =require('express');
const path=require('path');
const http=require('http');
const app=express();
const socketio=require('socket.io');
const server=http.createServer(app);
const io=socketio(server);
//set static folder

app.use(express.static(path.join(__dirname,'public')));

//run when aclien connects

io.on('connection',socket=> {
    console.log('new ws connection..... ');

    socket.emit('message','welcome to chatcord');
//brodcast when a user connects
socket.broadcast.emit('message','a user has joined the chat');


socket.on('disconnect',()=> { 
  io.emit('message','a user has left the chat');
});

//listen for chatMessage
 socket.on('chatMesssage', msg => {
   io.emit('message',msg);
 });

});

const PORT = 3000 || process.env.PORT;

app.listen(PORT ,()=> console.log('server running on port ' + PORT));
