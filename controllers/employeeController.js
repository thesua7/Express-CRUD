const express = require('express');

var router = express.Router();

router.get('/',(req,res) => {
    res.json('Simple text');
})

module.exports = router;