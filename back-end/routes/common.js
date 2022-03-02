var express = require('express');
var router = express.Router();
var Common = require('../models/common');

/* 获得赞 */
router.get('/like',  (req, res, next) => {
    try{
        Common.get('hello',(err,v)=>{
            res.send(200,v)
        })
    }catch(err){
        console.log(err);
    }
    
});

/* 更新赞 */
router.post('/like',  (req, res, next) => {
    try{
        Common.incr('hello',function(err,data){
            Common.get('hello',(err,v)=>{
                res.send(200,v)
            })
        })
        
    }catch(err){
        console.log(err);
    }
});

module.exports = router;
