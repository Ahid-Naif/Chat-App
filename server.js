const bodyParser = require('body-parser');
const express    = require('express');
const socketio   = require('socket.io');
const mongoose   = require('mongoose');

const app    = express();
const server = app.listen(3010);
const io     = socketio(server);

const connectionString = 'mongodb+srv://ahid:Uhi]khdtuhvtrhu,]123@chatapp-lt5m7.mongodb.net/test?retryWrites=true&w=majority';

app.use(express.static('static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

var Message = mongoose.model("Message", {
    name:    String,
    message: String
});

app.get('/messages', (req, res) => {
    Message.find({}, (err, messages) => {
        res.send(messages);
    });
});

app.post('/messages', (req, res) => {
    var message =  new Message(req.body);
    message.save( (err) => {
        if(err)
            sendStatus(500);
        
        io.emit(req.body);
        res.sendStatus(200);
    });
    
});

io.on('connection', (socket) => {
    console.log("User is connected");
});

mongoose.connect(connectionString, { useNewUrlParser: true }, (err) => {
    console.log('mongodb connection is successful!');
});