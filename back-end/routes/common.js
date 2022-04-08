var express = require('express');
var router = express.Router();
var { redis, code } = global

/* 获取赞 */
router.get('/like',  (req, res, next) => {
    try{
        redis.get('like', (err, like) => {
            res.send(code(200, { like: +like }))
        })
    }catch(err){
        console.log(err);
    }
});

/* 更新赞 */
router.post('/like',  (req, res, next) => {
    try {
        redis.incr('like', function(err, data) {
            redis.get('like', (err, like) => {
                res.send(code(200, {like: +like}))
            })
        })
    } catch(err) {
        console.log(err);
    }
});

module.exports = router;
