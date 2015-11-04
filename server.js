var express = require('express');

var app = express(),
    port = 8666;

app.use('/img', express.static('./img'));
app.use('/css', express.static('./css'));
app.use('/libs', express.static('./libs'));
app.use('/compiled', express.static('./compiled'));
app.use('/deckbuilder.html', express.static('./deckbuilder/index.html'));
app.use('/', express.static('./deckmanager'));

app.listen(port);
console.log('Listening at', port);
