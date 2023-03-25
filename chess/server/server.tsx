const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');

// enable CORS
const corsOptions = {
  origin: 'http://127.0.0.1:5173',
  optionsSuccessStatus: 200,
};
const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
  cors: corsOptions
});

app.use(cors(corsOptions));

io.on('connection', (socket) => {
  console.log('New client connected');

  // Listen for move events
  socket.on('move', (data) => {
    console.log('Received move event:', data);
    // Broadcast the move event to all clients except the sender
    socket.broadcast.emit('move', data);
    console.log(`Number of clients receiving move event: ${socket.server.engine.clientsCount}`);
  });

  // Listen for disconnect events
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
  
  // Set Access-Control-Allow-Origin header
  socket.on('connect', () => {
    const headers = {
      'Access-Control-Allow-Origin': 'http://127.0.0.1:5173',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
      'Access-Control-Allow-Headers': 'Content-Type',
    };
    socket.emit('setHeaders', headers);
  });
});

server.listen(5000, () => {
  console.log('Server is running on port 5000');
});