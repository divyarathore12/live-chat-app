const io=require('socket.io')(8000);
const cors=require('cors');
const { application } = require('express');
var express = require('express')
var app = express()


const user={}
io.on('connection', socket=>{
    socket.on('new-user-join',name=>{
        console.log("new user",name)
        user[socket.id]=name;
        socket.broadcast.emit('user-join',name);
    })
    socket.on('send',message=>{
        socket.broadcast.emit('receive',{message:message, name:user[socket.id]})
    })
})