# Chat-Application

A basic chat application built with socket using the socket.io library (https://socket.io/) incorporated with the server built using Node.js with Express framework (https://expressjs.com/)...
This chat app provides you total anonymity and has no sign-up or login...

# Prerequisites

   - Clone this repository using the command:
                  
                              git clone  https://github.com/ppvalluri09/Chat-Application/
                              cd Chat-Application
                              
   - Then install the required dependencies by using your favorite terminal
      
                              npm install express --save
                              # This is for express module
                              
                              npm install socket.io --save
                              # For the socket module
   
   - Then open your terminal in the folder of the repository and type in:
   
                              node server.js
                              # Server started on port 3000 must show up
   
   - Open up your browser and type in https://locahost:3000 to open up the chat application adn there you go....
   
 # Working
 
   We write the script for the sockets in both the server and client side, the messages are encoded into a JSON Object 
   (What is JSON? https://www.json.org/)...
   
   A basic socket connection from Server side can be made using:
   
                              const Server = require('socket.io');
                              const io = new Server();
                              
  From the client side the connect can be made using:
                              
                              <script src="/socket.io/socket.io.js"></script>
                              <script>
                                const socket = io('http://localhost');
                              </script>
  
# References
  
  - Express (https://expressjs.com/)
  - Socket.io (https://socket.io/)
  
  # Authors
  
  Valluri Pavan Preetham (@ppvalluri09)
  
