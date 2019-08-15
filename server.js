const bodyParser = require('body-parser');
const express    = require('express');
const app        = express();

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

app.listen(3010);