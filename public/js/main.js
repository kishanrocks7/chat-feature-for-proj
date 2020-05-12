const socket=io();

socket.on('messagee',message=>{
  console.log(message);
});