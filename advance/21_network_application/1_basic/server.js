// Server side of code
const net = require('net');

const server = net.createServer(function(socket) {
    console.log('Client connected');

    socket.on('data', function(data) {
        console.log('Client says: ' + data);
    });

    socket.on('end', function() {
        console.log('Client disconnected');
    });

    socket.write('Hi client');
    socket.end();
});

server.listen(5500); // listen on port 5500
console.log('Server listening on port 5500');


/*
socket variable - represents the connection between the server and the client

socket.write() - sends data to the client
socket.end() - closes the connection with the client

server.listen() - will put the server in listening mode but its asynchronous 

Lets understand what address is coming to function(socket):
Basically client A request which comes to server at 5500 is diverted to this function(socket) which represents that perticular connection of the client A only
And if other client B request comes to server at 5500, it will be diverted to this function(socket) which represents that perticular connection of the client B only
So internally each connection is maintained by the server on the different internal ports which are available dynamically to be used for such programs only.
The moment client disconnects, the connection is closed and the internal port is freed up for other connections.

The Big challenge associated with this to handle its asynchronous nature:
- Each client connection is handled independently
- Multiple clients can connect simultaneously
- Server must manage all connections concurrently with some unique identifier for each connection
- Need to handle connection errors, timeouts, and disconnections properly

With TCP/IP connection we are able to manage two ways of communications:
- Two way communication (client to server and server to client)
- Here we have reliability in terms of data transmission
- Every single data packet that will be dispatched from client needs to be acknowledged by the server
- HTTP is built on top of TCP (Transmission Control Protocol)


With UDP connection:
- Speed is important
- Reliability is not important
*/