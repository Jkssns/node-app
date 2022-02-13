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