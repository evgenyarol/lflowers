const express = require('express');
const app = express();

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "http://0.0.0.0:8080");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})
app.use(require('./api'));


const server = app.listen(process.env.PORT || 3131, function() {
    console.log('Server up and running in %d ', server.address().port)
})
