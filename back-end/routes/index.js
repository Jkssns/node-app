var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/login', (req, res, next) => {
    if (req.body.user) {
        res.send(req.body)
    } else {
        res.send({code: 200})
    }
});

module.exports = router;











