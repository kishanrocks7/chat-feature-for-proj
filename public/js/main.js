const chatForm = document.getElementById('chat-form')
const socket = io();

socket.on('message',message=>{
  console.log(message);
});

//message submit
chatForm.addEventListener('submit' , (e) =>{
  e.preventDefault();


  //get message text
  const msg =e.target.elements.msg.value;
//emitting a message to server
  socket.emit('chatMessage',msg);
});

//output mesaage to DOM

function outputMessage(message) {
  const div = document.createElement('div');
  div.classList.add('message');
  div.innerHTML = ""
}