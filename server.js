// server.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});
 
let currentPage = 1; // Track the current page number

// WebSocket handling
io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  // Send the current page to newly connected clients
  socket.emit('pageChange', currentPage);

  // Listen for page change from admin and broadcast to all clients
  socket.on('changePage', (page) => {
    currentPage = page;
    io.emit('pageChange', page);
  });
 
  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

const PORT = 5010;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

    