const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
    // res.end('Hello World!');
});

module.exports = router;