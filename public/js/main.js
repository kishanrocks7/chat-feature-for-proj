const chatForm = document.getElementById('chat-form');
const chatMessages =document.querySelector('.chat-messages');
const socket = io();

socket.on('message',message=>{
  console.log(message);

  //scroll down
  chatMessages.scrollTop = chatMessages.scrollHeight;
});

//message submit
chatForm.addEventListener('submit' , (e) =>{
  e.preventDefault();


  //get message text
  const msg =e.target.elements.msg.value;
//emitting a message to server
  socket.emit('chatMessage',msg);
  e.target.element.msg.value="";
  e.target.element.msg.focus();
});

//output mesaage to DOM

function outputMessage(message) {
  const div = document.createElement('div');
  div.classList.add('message');
  div.innerHTML = ` <p class="meta">brand<span> 9:12pm</span></p>
  <p class="text">
  ${message}
  </p>`;
  document.querySelector('.chat-message').appendChild(div);
}