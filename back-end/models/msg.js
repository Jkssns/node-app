var mongoose = require('mongoose')
var MsgSchema = require('../schemas/msg')
var MSG = mongoose.model('Msg', MsgSchema)

module.exports = MSG