var express = require('express');
var router = express.Router();
const connection = require('../mysql');
const { v4: uuidv4 } = require("uuid");

router.get('/field_config/scenes', (req, res) => {
    connection.query('SELECT * from scenes;', function (error, data, fields) {
        if (error) throw error;
        res.send(code(200, results))
    });
});

router.post('/field_groups', (req, res) => {
    connection.query('SELECT * from group_list;', function (error, data, fields) {
        if (!error) {
            const parent = [], children = [];
            data.forEach(item => {
                item.parentId ? children.push(item) : parent.push(item);
            })
            parent.forEach(item => {
                item.children = [];
                for (let i=children.length - 1; i>=0; i--) {
                    if (children[i].parentId === item.id) {
                        item.children.push(children[i]); 
                        children.splice(i, 1);
                    }
                }
            })
            
            res.send(code(200, parent));
        } else {
            res.send(code(500));
            return error
        }
    });
});

router.post('/field_group/create', (req, res) => {
    const body = req.body;
    const addSql = 'INSERT INTO group_list set ?';
    const obj = {
        ...body,
        id: uuidv4(),
    }
    connection.query(addSql, obj, function (error, data, fields) {
        if (error) throw error;
        res.send(code(200))
    });
});

router.post('/field_group/update', (req, res) => {
    const body = req.body;
    const obj = {
        name: body.name,
        nameEn: body.nameEn,
        id: body.id,
    }
    connection.query('update group_list set ? where id= ?', [obj, obj.id], function (error, data, fields) {
        if (error) throw error;
        res.send(code(200))
    });
});

router.post('/field_group/remove', (req, res) => {
    connection.query('delete from group_list where id= ?', req.body.id, function (error, data, fields) {
        if (!error) {
            res.send(code(200));
        } else {
            console.log('error::: ', error);
            res.send(code(500));
            return error
        }
    });
});

router.post('/field_group/regroup', (req, res) => {
    const body = req.body;
    connection.query('update group_list set parentId= ? where id= ?', [body.to, body.id], function (error, data, fields) {
        if (error) throw error;
        res.send(code(200))
    });
});





module.exports = router;
