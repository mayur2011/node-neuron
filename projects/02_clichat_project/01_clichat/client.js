const net = require('net');
const readline = require('readline');

const PORT = 5500;
const HOST = '127.0.0.1';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let loggedIn = false;
let username = '';
let client = null;

function connectToServer() {
    client = net.createConnection({ port: PORT, host: HOST }, () => {
        console.log('Connected to chat server');
        console.log('========================================');
        promptLogin();
    });

    client.on('data', (data) => {
        const messages = data.toString().trim().split('\n');
        messages.forEach((msg) => {
            handleServerMessage(msg);
        });
    });

    client.on('end', () => {
        console.log('\nDisconnected from server');
        process.exit(0);
    });

    client.on('error', (err) => {
        console.error(`Connection error: ${err.message}`);
        process.exit(1);
    });
}

function handleServerMessage(rawMsg) {
    try {
        const data = JSON.parse(rawMsg);

        switch (data.action) {
            case 'login':
                if (data.success) {
                    loggedIn = true;
                    console.log(`\n${data.message}`);
                    console.log(`Your session ID: ${data.id}`);
                    console.log('========================================');
                    console.log('Commands:');
                    console.log('  all:<message>        - Send to everyone');
                    console.log('  <username>:<message> - Private message');
                    console.log('  /users:              - List online users');
                    console.log('  /quit                - Exit chat');
                    console.log('========================================');
                    promptChat();
                } else {
                    console.log(`\nLogin failed: ${data.message}`);
                    promptLogin();
                }
                break;

            case 'message':
                if (data.private) {
                    if (data.from === 'You') {
                        console.log(`\n[PM to ${data.to}] ${data.message}`);
                    } else {
                        console.log(`\n[PM from ${data.from}] ${data.message}`);
                    }
                } else {
                    console.log(`\n${data.from}: ${data.message}`);
                }
                promptChat();
                break;

            case 'userlist':
                console.log('\nOnline users:');
                data.users.forEach((user) => {
                    const marker = user === username ? ' (you)' : '';
                    console.log(`  - ${user}${marker}`);
                });
                promptChat();
                break;

            case 'error':
                console.log(`\n[Error] ${data.message}`);
                if (!loggedIn) {
                    promptLogin();
                } else {
                    promptChat();
                }
                break;

            default:
                console.log(`\n${rawMsg}`);
                if (loggedIn) {
                    promptChat();
                }
                break;
        }
    } catch (e) {
        // non-JSON server message (e.g. broadcast string)
        console.log(`\n${rawMsg}`);
        if (loggedIn) {
            promptChat();
        }
    }
}

function promptLogin() {
    rl.question('Username: ', (inputUser) => {
        rl.question('Password: ', (inputPass) => {
            username = inputUser.trim();
            const loginMsg = JSON.stringify({
                action: 'login',
                username: username,
                password: inputPass.trim()
            });
            client.write(loginMsg + '\n');
        });
    });
}

function promptChat() {
    rl.question(`${username}> `, (input) => {
        const trimmed = input.trim();
        if (!trimmed) {
            promptChat();
            return;
        }

        if (trimmed === '/quit') {
            console.log('Goodbye!');
            client.end();
            rl.close();
            return;
        }

        if (trimmed === '/users') {
            client.write('/users:\n');
            return;
        }

        // send the message as-is; server handles routing
        client.write(trimmed + '\n');
    });
}

// start the client
connectToServer();

/*
Client End:
- Client will login with username and password (JSON String)
- Client will send message to server
- Client will receive message from server
    - Server message "{"success":true, "id":1}" or "{"success":false}"
*/
