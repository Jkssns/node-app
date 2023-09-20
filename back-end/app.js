var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// var mongoose = require('./server-modules/mongodb');
var Global = require('./utils/global');
// var connection = require('./mysql/connection');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var commonRouter = require('./routes/common');
var fileRouter = require('./routes/file');
var faceRouter = require('./routes/face');
var fieldRouter = require('./routes/field-mysql');


//关闭连接
//   connection.end(function(err){
//     if(err){
//       return;
//     }
//     console.log("[connection end] succeed!");
//   })

var app = express();
app.all('*', function (req, res, next) {
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header('Access-Control-Allow-Origin', '*');
    //允许的header类型
    res.header('Access-Control-Allow-Headers', '*');
    //跨域允许的请求方式
    res.header('Access-Control-Allow-Methods', '*');

    if (req.method.toLowerCase() == 'options') res.send(200);
    //让options尝试请求快速结束
    else next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/user', usersRouter);
app.use('/common', commonRouter);
app.use('/view', fileRouter);
app.use('/face', faceRouter);
app.use('/user', fieldRouter);

// catch 404 and forward to error handler
app.use(function(err,req,res,next){
    res.send(code(500));
    next();
 })

module.exports = app;
