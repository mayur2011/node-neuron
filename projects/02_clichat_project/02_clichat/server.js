const net = require('net');
const fs = require('fs');

class Response {
    constructor() {
        this.action = '';
        this.success = false;
        this.error = null;
        this.result = null;
    }
}

// Data Structure
class DataModel {
    constructor() {
        this.users = [];
        this.userID = 0; // counter variable for logged in users
    }

    getUserByUsername(username) {
        let user = this.users.find(function(user){
            return user.username == username;
        });
        return user;
    }

    getLoggedInUsers() {
        let loggedInUsers = [];
        for(let e=0;e<this.users.length;e++){
            if(this.users[e].loggedIn){
                loggedInUsers.push(this.users[e].username);
            }
        }
        return loggedInUsers;
    }
}

// global variable
const model = new DataModel();

// load users from users.data
function populateDataStructure() {
    let usersJSONString = fs.readFileSync('users.data', 'utf-8');
    let users = JSON.parse(usersJSONString).users;
    users.forEach(function(user){
        user.loggedIn = false;
        user.id = 0;
        model.users.push(user);
    });
}

function processRequest(requestObject) {
    // Process the request object
    // And to return the response which we need to send back to the client
    // We need a reference to the socket object
    // because in order to send the response back to the client, we need to write socket.write() or something like that
    if(requestObject.action == 'login'){
        // Process login action
        let username = requestObject.username;
        let password = requestObject.password;
        
        let user = model.getUserByUsername(username);
        let success = false;
        if(user){
            if(password == user.password) {
                success = true;
            }
        }

        let response = new Response();
        response.action = requestObject.action;
        response.success = success;
        if (success) {
            response.error = "";
            model.userID++;
            requestObject.socket.userID=model.userID; // socket reference to user id
            user.id=model.userID; // user reference to user id
            user.loggedIn=true;

            response.result = {
                "username": user.username,
                "id": user.id
            };
        } else {
            response.error = 'Invalid username / password';
            response.result = "";
        }
        
        // send response back to client
        requestObject.socket.write(JSON.stringify(response));
    }

    if(requestObject.action === 'getUsers'){
        let response = new Response();
        response.action = requestObject.action;
        response.result = model.getLoggedInUsers();
        requestObject.socket.write(JSON.stringify(response));
    }

    if (requestObject.action === 'logout') {
        // Process logout action
        console.log("Logout action received");
        
        let response = new Response();
        response.action = requestObject.action;
        response.success = true;
        response.error = "";
        response.result = "";
        requestObject.socket.write(JSON.stringify(response));
        requestObject.socket.end();
    }
}

populateDataStructure();

let server = net.createServer(function(socket) {
   socket.on('data', function(data) {
    console.log('Data received from client');
    console.log(data.toString());

    // more programming is required to handle fragmented data packets
    let requestObject = JSON.parse(data);
    // dynamically add socket reference to request object
    requestObject.socket = socket;

    try{
        processRequest(requestObject);
    }catch(e){
        console.log(e);
    }
   });

   socket.on('end', function() {
    console.log('Client disconnected'); // more programming is required
   });

   socket.on('error', function() {
    console.log('Client error'); // more programming is required
   });

   console.log('Client connected');
});

server.listen(3000, function() {
    console.log('Server listening on port 3000');
});