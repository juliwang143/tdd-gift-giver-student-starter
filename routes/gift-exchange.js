const express = require('express');
const router = express.Router();
const GiftExchangeModel = require('../models/gift-exchange');

router.post('/pairs', (req, res) => {
    const names = req.body.names;
    const pairs = GiftExchangeModel.pairs(names);
    res.send({pairs});
})

router.post('/traditional', (req, res) => {
    const names = req.body.names;
    const traditionalPairs = GiftExchangeModel.traditional(names);
    res.send({traditionalPairs});
})

module.exports = router