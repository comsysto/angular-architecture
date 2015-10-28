var express = require('express');

var app = express(),
    port = 8666;

app.use('/common', express.static('./common'));
app.use('/', express.static('./home'));
app.use('/about', express.static('./about'));

app.listen(port);
console.log('Listening at', port);