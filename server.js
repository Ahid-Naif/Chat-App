const express = require('express');

var messages = [
    {name: 'Ahed',   messages: 'Hello'},
    {name: 'Faisal', messages: 'Hi'}
]

const app = express();
app.use(express.static('static'));

app.get('/messages', (req, res) => {
    res.send(messages);
});

app.listen(3010);