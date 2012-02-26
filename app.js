var app = require('express').createServer(),
    io = require('socket.io').listen(app);

app.listen(3030);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.sockets.on('connection', function (socket) {
  socket.on('turn played', function(data){
    socket.broadcast.emit('turn played', data);
  });
  socket.on('winner', function(data){
    socket.broadcast.emit('game over', { "winner": data });
  });
});

