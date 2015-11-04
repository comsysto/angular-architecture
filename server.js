var express = require('express');

var app = express(),
    port = 8666;

app.use('/img', express.static('./img'));
app.use('/css', express.static('./css'));
app.use('/libs', express.static('./libs'));
app.use('/build', express.static('./build'));
app.use('/common', express.static('./common'));
app.use('/deckbuilder', express.static('./deckbuilder'));
app.use('/deckmanager', express.static('./deckmanager'));
app.use('/', express.static('./deckmanager'));

app.listen(port);
console.log('Listening at', port);
