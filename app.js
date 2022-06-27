const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser');
const giftExchange = require('./routes/gift-exchange');

app.use(bodyParser.json());

app.use(morgan('tiny'));

app.use('/gift-exchange', giftExchange)

app.get('/test', (req, res) => {
    res.status(200).send({"ping": "pong"});
})

module.exports = app;