const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`);
});

server.listen(8000, () => {
    console.log('Écoute sur le port: 8000');
});

io.on('connection', (socket) => {
    console.log('Un user est connecté !');

    socket.on('disconnect', () => {
        console.log("Un user est déconnecté !")
    })

    socket.on("tchat_message", (msg) => {
        io.emit('tchat_message', msg);
    });
});