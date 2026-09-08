const net = require('net');
const readline = require('readline');
const events = require('events');

// to get input from users
// this acceptInput part needs to be synchronous
// ioInterface is the readline interface which will come as parameter
function acceptInput(q, ioInterface) {
    let promise = new Promise(function(resolve, reject){
        ioInterface.question(q, function(answer) {
            resolve(answer);
        })
    });
    return promise;
}

// Data Model client side
class DataMode{
    constructor() {
        this.user=null;

    }
}

class Request{
    constructor() {
        this.action = "";    
    }
}

const model = new DataMode();
const eventEmitter = new events.EventEmitter();
var client = null;

function processAction(action){
    if(action == 'login'){
        // TODO: Implement login logic
        processLoginAction();
    }
    
    if(action == 'logout'){
        // TODO: Implement logout logic
        processLogoutAction();
    }

    if(action == 'acceptCommand'){
        // TODO: Implement list logic
        processAcceptCommandAction();
    }
}

async function processLoginAction(){
    // TODO: Implement login logic
    let ioInterface = readline.createInterface({ 
        "input": process.stdin, 
        "output": process.stdout });
    
    let user = await acceptInput("Enter username: ", ioInterface);
    let password = await acceptInput("Enter password: ", ioInterface);
    ioInterface.close();

    console.log("User: " + user);
    console.log("Password: " + password);
    
    // TODO: Send login request to server
    let request = new Request();
    request.action = 'login';
    request.username = user;
    request.password = password;

    client.write(JSON.stringify(request));
    // TODO: Handle response from server - processLoginActionResponse
}

function processLoginActionResponse(response){
    // Handle response from server
    if(response.success == false){
        console.log(response.error);
        return;
    }

    model.user = response.result;
    eventEmitter.emit('loggedIn');
}

function processLogoutAction(){
    // TODO: Implement logout logic
}

function processLogoutActionResponse(response){
    console.log("Logout response: " + JSON.stringify(response));
    // Handle response from server
    if(response.success == false){
        console.log(response.error);
        return;
    }

    model.user = null;
    eventEmitter.emit('loggedOut');
}

async function processAcceptCommandAction(){
    // Implement accept command logic
    let ioInterface = readline.createInterface({ "input": process.stdin, "output": process.stdout });
    let command = await acceptInput(`${model.user.username}_${model.user.id}@clichat>`, ioInterface);
    console.log("Waiting for command: " + command);
    ioInterface.close(console.log("Closing ioInterface after command received"));
    
    // Send command to server
    let request = new Request();
    request.action = command; // this will change later on

    client.write(JSON.stringify(request));
    // Handle response from server - processAcceptCommandActionResponse
}

function processAcceptCommandActionResponse(response){
    // Handle response from server
    if(response.action == 'getUsers'){
        eventEmitter.emit('usersListArrived', response.result);
    }

    if(response.action == 'logout'){
        eventEmitter.emit('loggedOut');
    }
}

// Define the events
function loggedIn(){
    console.log(`Welcome ${model.user.username}`);
    processAction('acceptCommand');
}

function loggedOut(){
    console.log("Logged out successfully");
}

function usersListArrived(users){
    console.log("list of online users");
    for(let i = 0; i < users.length; i++){
        console.log(users[i]);
    }
    processAction('acceptCommand');
}

// setting up events
eventEmitter.on('loggedIn', loggedIn);
eventEmitter.on('loggedOut', loggedOut);
eventEmitter.on('usersListArrived', usersListArrived);


client = new net.Socket();
client.connect(3000, 'localhost', () => {
    console.log('Connected to chat server');
    processAction('login'); // Game will start from here
});

// When server side data arrives
// Below code will run when we will pass some request and response will come from server
client.on('data', (data) => {
    let response = JSON.parse(data.toString());
    if(response.action =="login"){
        processLoginActionResponse(response);
    }
    else if(response.action =="getUsers"){
        processAcceptCommandActionResponse(response);
    }
    else if(response.action =="logout"){
        processLogoutActionResponse(response);
    }
});

client.on('end', () => {
    console.log('Connection closed');
});

client.on ('error', (error) => {
    console.log(error);
});