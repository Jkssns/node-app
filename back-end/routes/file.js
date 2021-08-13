var express = require('express');
var router = express.Router();
var request = require('request')
var fs = require('fs');
var fileTypes = require('./../public/javascripts/types.json')

/* GET home page. */
router.get('/', (req, res) => {
    fs.readFile(``, function (err, data) {
        if (err) {
            res.set({ 'Content-Type': 'text/plain' })
            res.status(404).send('Bad Request')
            return;
        } else {
            let suffix = '.jpg' || ''
            res.set({ 'Content-Type':  fileTypes[suffix]  })
            res.status(200).send(data)
        }
    });
});
module.exports = router;













// 租房注意事项
/* 
1、水有没有味道，是否浑浊？
2、各个设施有没有坏的地方，空调、洗衣机、热水器、马桶？
3、周围有没有施工队，天上有没有飞机？
4、押金怎么退，什么时候退？
5、



*/