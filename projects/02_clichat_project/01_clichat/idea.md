# Server End:
- When server code is executed [server is started]
- Read contents of users.data file and create a data structure to store user information
- Server is listening on port 5500
- Server is waiting for client connection


# Client End:
- Client will login with username and password (JSON String)
- Client will send message to server
    - Message format: "{username}:{message}"
- Client will receive message from server
    - Server message "{"action":"login", "success":true, "id":1}" or "{"action":"login", "success":false}"
    - Server needs to introduce an action field in the message
- Client will parse the message and validate it
    - If login is unsuccessful, client will display the message to the user
    - If login is successful, client will display the message to the user



# Challenges:
- What to show on commond promt after running the application
- Username and password input
- if incorrect then again same prompt
- if correct then show welcome message

