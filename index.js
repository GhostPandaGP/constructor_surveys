const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use('/api', require('./api'));

const port = 3050;
mongoose.connect('mongodb://localhost/survey-db', {useNewUrlParser: true}, (err) => {
    if (err) {
        return console.log(err);
    }
    app.listen(port, () => {
        console.log(`Port ${port} is work`);
    });
});
