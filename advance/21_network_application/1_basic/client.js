// Client side of code
const net = require('net');

const clientSocket = new net.Socket();

clientSocket.connect(5500, 'localhost', function() {

    console.log('Connected to server');
    clientSocket.write('Hi, Server');
});

clientSocket.on('data', function(data) {
    console.log('Server says: ' + data);
    clientSocket.end();
});

clientSocket.on('end', function() {
    console.log('Disconnected from server');
});

/*
All these are asynchronous operations
*/