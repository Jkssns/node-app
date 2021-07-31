var express = require('express');
var router = express.Router();
var Msg = require('../models/msg');

/* 留言列表 */
router.get('/list', async (req, res, next) => {
    Msg.find({}, (err, obj) => {
        if (!err) {
            res.send({ code: 200, msg: 'ok', data: obj })
        } else {
            res.send({ code: 200, msg: '暂无留言', data: [] })
        }
    })
})

router.get('/add', async (req, res, next) => {
    Msg.create({  }, (err, obj) => {
        if (!err) {
            res.send({ code: 200, msg: 'ok', data: obj });
        } else {
            res.send({ code: 200, msg: '查无此人' });
        }
    });
})

module.exports = router;



