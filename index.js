const express = require('express');
const routes = require('./routes/api');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.json());
app.use('/api', routes);

app.listen(process.env.port || 3000, function(err, req, res) {
    if(!err) {
        console.log('abc def house');
    }
    else {
        console.log(err.message);
    }
})