// import WebSocket from "ws";
// const server = new WebSocket.Server({port: '8080'});

// server.on('connection', socket => {
//     socket.on('message', msg => {
//         console.log(msg);

//         socket.send(`Arijit Says ${msg}`);
//     })
// })

const http = require('http').createServer();

const io = require('socket.io')(http, {
    cors: {origin: "*"}
});

io.on('connection', socket => {
    console.log('user connected');
    // console.log(socket);

    socket.on('message', msg => {
        // console.log(msg);
        io.emit('message', `${msg.name} said ${msg.text}`);
    })
});

http.listen(8080, () => console.log('server listening on port 8080'));

