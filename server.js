const bodyParser = require('body-parser');
const express    = require('express');
const socketio   = require('socket.io');

const app    = express();
const server = app.listen(3010);
const io     = socketio(server);

app.use(express.static('static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

var messages = [
    {name: 'Ahed',   message: 'Hello'},
    {name: 'Faisal', message: 'Hi'}
]

app.get('/messages', (req, res) => {
    res.send(messages);
});

app.post('/messages', (req, res) => {
    messages.push(req.body);
    res.sendStatus(200);
});

io.on('connection', (socket) => {
    console.log("User is connected");
});