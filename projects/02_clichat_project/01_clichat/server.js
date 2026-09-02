const net = require('net');
const fs = require('fs');

class DataModel {
    constructor() {
        this.usersMap = new Map();
        this.loggedInUsers = new Map(); // username -> socket
        this.nextId = 1;
    }

    loadUsers(filePath) {
        const usersJSONString = fs.readFileSync(filePath, 'utf-8');
        const usersObj = JSON.parse(usersJSONString);
        usersObj.users.forEach((user) => {
            this.usersMap.set(user.username, {
                username: user.username,
                password: user.password,
                id: 0,
                online: false
            });
        });
        console.log(`Loaded ${this.usersMap.size} users from ${filePath}`);
    }

    getUserByUsername(username) {
        return this.usersMap.get(username) || null;
    }

    authenticate(username, password) {
        const user = this.getUserByUsername(username);
        if (user && user.password === password) {
            return user;
        }
        return null;
    }

    loginUser(username, socket) {
        const user = this.getUserByUsername(username);
        if (user) {
            user.id = this.nextId++;
            user.online = true;
            this.loggedInUsers.set(username, socket);
            return user;
        }
        return null;
    }

    logoutUser(username) {
        const user = this.getUserByUsername(username);
        if (user) {
            user.online = false;
            user.id = 0;
        }
        this.loggedInUsers.delete(username);
    }

    getLoggedInUsers() {
        const onlineUsers = [];
        this.loggedInUsers.forEach((socket, username) => {
            onlineUsers.push(username);
        });
        return onlineUsers;
    }

    getSocketByUsername(username) {
        return this.loggedInUsers.get(username) || null;
    }
}

// global variable
const model = new DataModel();

// load users from users.data
model.loadUsers('users.data');

const PORT = 5500;

const server = net.createServer((socket) => {
    let clientUsername = null;

    console.log('New client connected');

    socket.on('data', (data) => {
        const rawMessage = data.toString().trim();

        // check if this is a login attempt
        if (!clientUsername) {
            try {
                const loginData = JSON.parse(rawMessage);
                if (loginData.action === 'login') {
                    const user = model.authenticate(loginData.username, loginData.password);
                    if (user) {
                        // check if already logged in
                        if (model.loggedInUsers.has(loginData.username)) {
                            const response = JSON.stringify({
                                action: 'login',
                                success: false,
                                message: 'User already logged in from another client'
                            });
                            socket.write(response + '\n');
                            return;
                        }

                        const loggedInUser = model.loginUser(loginData.username, socket);
                        clientUsername = loginData.username;

                        const response = JSON.stringify({
                            action: 'login',
                            success: true,
                            id: loggedInUser.id,
                            message: `Welcome ${clientUsername}! You are now online.`
                        });
                        socket.write(response + '\n');

                        // broadcast to other users that this user joined
                        broadcast(`[Server] ${clientUsername} has joined the chat.`, clientUsername);

                        console.log(`${clientUsername} logged in (id: ${loggedInUser.id})`);
                    } else {
                        const response = JSON.stringify({
                            action: 'login',
                            success: false,
                            message: 'Invalid username or password'
                        });
                        socket.write(response + '\n');
                    }
                }
            } catch (e) {
                const response = JSON.stringify({
                    action: 'error',
                    message: 'Invalid login format. Send JSON: {"action":"login","username":"...","password":"..."}'
                });
                socket.write(response + '\n');
            }
        } else {
            // user is logged in, handle chat messages
            // expected format: "username:message"
            const colonIndex = rawMessage.indexOf(':');
            if (colonIndex === -1) {
                // treat entire message as a broadcast
                const chatMsg = JSON.stringify({
                    action: 'message',
                    from: clientUsername,
                    message: rawMessage
                });
                broadcast(chatMsg, clientUsername);
                console.log(`${clientUsername}: ${rawMessage}`);
            } else {
                const targetUser = rawMessage.substring(0, colonIndex).trim();
                const message = rawMessage.substring(colonIndex + 1).trim();

                if (targetUser === 'all') {
                    // broadcast to everyone
                    const chatMsg = JSON.stringify({
                        action: 'message',
                        from: clientUsername,
                        message: message
                    });
                    broadcast(chatMsg, clientUsername);
                    console.log(`${clientUsername} (to all): ${message}`);
                } else if (targetUser === '/users') {
                    // list online users
                    const onlineUsers = model.getLoggedInUsers();
                    const response = JSON.stringify({
                        action: 'userlist',
                        users: onlineUsers
                    });
                    socket.write(response + '\n');
                } else {
                    // private message
                    const targetSocket = model.getSocketByUsername(targetUser);
                    if (targetSocket) {
                        const chatMsg = JSON.stringify({
                            action: 'message',
                            from: clientUsername,
                            to: targetUser,
                            message: message,
                            private: true
                        });
                        targetSocket.write(chatMsg + '\n');
                        // echo back to sender
                        const echo = JSON.stringify({
                            action: 'message',
                            from: 'You',
                            to: targetUser,
                            message: message,
                            private: true
                        });
                        socket.write(echo + '\n');
                        console.log(`${clientUsername} -> ${targetUser}: ${message}`);
                    } else {
                        const response = JSON.stringify({
                            action: 'error',
                            message: `User '${targetUser}' is not online`
                        });
                        socket.write(response + '\n');
                    }
                }
            }
        }
    });

    socket.on('end', () => {
        if (clientUsername) {
            console.log(`${clientUsername} disconnected`);
            model.logoutUser(clientUsername);
            broadcast(`[Server] ${clientUsername} has left the chat.`, clientUsername);
        }
    });

    socket.on('error', (err) => {
        if (clientUsername) {
            console.log(`${clientUsername} connection error: ${err.message}`);
            model.logoutUser(clientUsername);
            broadcast(`[Server] ${clientUsername} has left the chat.`, clientUsername);
        }
    });
});

function broadcast(message, excludeUsername) {
    model.loggedInUsers.forEach((socket, username) => {
        if (username !== excludeUsername) {
            socket.write(message + '\n');
        }
    });
}

server.listen(PORT, () => {
    console.log(`Chat server listening on port ${PORT}`);
    console.log('Waiting for client connections...');
});
