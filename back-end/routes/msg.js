var express = require('express');
var router = express.Router();
var Msg = require('../models/msg');

/* 留言列表 */
router.get('/list', async (req, res, next) => {
    Msg.find({}, (err, obj) => {
        if (!err) {
            res.send({ code: 200, msg: 'ok', data: obj.map(item => ( {msg: item.msg, id: item._id, createDate: item.createDate, like: item.like } )) });
        } else {
            res.send({ code: 200, msg: '暂无留言', data: [] });
        }
    });
});

router.post('/add', async (req, res, next) => {
    const { msg } = req.body
    if (!msg) {
        res.json({
            code: 200,
            data: '留言不能为空',
        });
    }
    const msgObj = new Msg({msg});
    msgObj.save((err, msgRes) => {
        if (!err) {
            res.json({
                code: 200,
                msgRes,
                data: 'ok',
            });
        }
    });
});


router.delete('/delete', async (req, res, next) => {
    const { id } = req.query
    if (id) {
        Msg.findByIdAndRemove(id, function (err, data) {
            if (!err) {
                res.json({
                    code: 200,
                    msg: '删除成功'
                })
            }
        });
    } else {
        res.json({
            code: 200,
            msg: 'id must not be null or undefined'
        })
    }
});

router.delete('/deleteAll', async (req, res, next) => {
    Msg.remove({}, function (err, data) {
        if (!err) {
            res.json({
                code: 200,
                msg: '全部删除成功'
            })
        }
    });
});

module.exports = router;
