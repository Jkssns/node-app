var express = require('express');
var router = express.Router();
var Common = require('../models/common');

/* 获得赞 */
router.get('/like', async (req, res, next) => {
    Common.findOne({_id: '620740d1855cb62f0445afdf'}, (err, data) => {
        if (!err) {
            res.send(global.code(200, data));
        } else {
            res.send(global.code(500, err));
        }
    });
});

/* 更新赞 */
router.post('/like', async (req, res, next) => {
    Common.findOneAndUpdate({_id: '620740d1855cb62f0445afdf'}, {like: req.body.like}, {new: true}, (err, data) => {
        if (!err) {
            res.send(global.code(200, data));
        } else {
            res.send(global.code(500, err));
        }
    });
});

module.exports = router;
