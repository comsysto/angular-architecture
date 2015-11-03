var express = require('express');

var app = express(),
    port = 8666;

app.use('/img', express.static('./img'));
app.use('/common', express.static('./common'));
app.use('/deckbuilder', express.static('./deckbuilder'));
app.use('/', express.static('./deckbuilder'));

app.listen(port);
console.log('Listening at', port);