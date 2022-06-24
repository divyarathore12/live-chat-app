const socket=io('http://localhost:8000');
const form=document.getElementById('sendcontent');
const mip=document.getElementById('messageinp');
const messagecontainer=document.querySelector('.container');
const append =(message,)=>{
    const messageelemt=document.createElement('div')
    messageelemt.innerHTML=message;
    messageelemt.classList.add('message')
    messageelemt.classList.add('position')
    messagecontainer.append(messageelemt)

}
const name=prompt("Enter your name to join")
socket.emit('new-user-join',name)
socket.on('user-join',name=>{
    append( `${name}join the chat`,'right')
})


