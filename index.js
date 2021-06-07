const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`)
})

io.

server.listen(8000, () => {
    console.log('Écoute sur le port: 8000')
})