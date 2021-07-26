var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* 用户列表 */
router.get('/list', async (req, res, next) => {
    if (req.query.id) {
        User.findOne({ _id: req.query.id + 'asdfa' }, (err, obj) => {
            if (!err) {
                res.send({ code: 200, msg: 'ok', data: obj });
            } else {
                res.send({ code: 200, msg: '查无此人' });
            }
        });
    }
});

/* 添加用户 */
router.post('/add', async (req, res, next) => {
    if (req.query.id) {
        User.findOne({ _id: req.query.id + 'asdfa' }, (err, obj) => {
            if (!err) {
                res.send({ code: 200, msg: 'ok', data: obj });
            } else {
                res.send({ code: 200, msg: '查无此人' });
            }
        });
    }
});

/* 删除用户 */
router.delete('/delete', async (req, res, next) => {
    if (req.query.id) {
        User.findOne({ _id: req.query.id }, (err, obj) => {
            if (!err) {
                res.send({ code: 200, msg: 'ok', data: obj });
            } else {
                res.send({ code: 200, msg: '查无此人' });
            }
        });
    }
});

/* 更新用户 */
router.put('/update', async (req, res, next) => {
    if (req.query.id) {
        User.findOne({ _id: req.query.id + 'asdfa' }, (err, obj) => {
            if (!err) {
                res.send({ code: 200, msg: 'ok', data: obj });
            } else {
                res.send({ code: 200, msg: '查无此人' });
            }
        });
    }
});

module.exports = router;
