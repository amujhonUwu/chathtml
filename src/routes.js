const express = require('express');
const morgan = require('morgan');

const router = express();
router.use(morgan("dev"));

router.get('/login', (req, res) => {
    res.sendFile(__dirname + '/sites/login.html');
});

router.get('/singin', (req, res) => {
    res.sendFile(__dirname + '/sites/singin.html');
});

router.get('/index', (req, res) => {
    res.sendFile(__dirname + '/sites/index.html');
});

module.exports = router;