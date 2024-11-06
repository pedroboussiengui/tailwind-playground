const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'src')));

// sendFile will go here
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'src', '/index2.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);