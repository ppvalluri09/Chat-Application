var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

var server = app.listen(port);
app.use(express.static('public'));

var socket = require('socket.io');
var io = socket(server);
io.on('connection', newConnection);

function newConnection(socket){
  console.log('New Connection: ' + socket.id);
  socket.on('msg', gotMsg);
}

function gotMsg(data){
  io.emit('msg', data);
  //sockets.broadcast.emit('msg', data);
  //io.sockets.emit('msg', data);
}
