const express = require('express');

const app = express();
app.use(express.static('static'));

app.get('/messages', (req, res) => {
    res.send("It's working!!!");
});

app.listen(3010);