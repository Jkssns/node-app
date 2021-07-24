var express = require('express');
var router = express.Router();
var User = require('../models/user')

/* GET home page. */
router.get('/', async (req, res, next) => {
    if (req.query.id) {
        User.findOne({_id: req.query.id}, (err, obj) => {
            if (!err) {
                res.send({code: 200, msg: 'ok', data: obj})
            } else {
                res.send({code: 200, msg: '查无此人' })
            }
        })
    }
});

module.exports = router;











