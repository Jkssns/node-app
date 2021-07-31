var mongoose = require('mongoose')
var MsgSchema = new mongoose.Schema({
    msg: {
        type: String,
        required: true,
        trim: true,
    },  // 留言
    like: {
        type: Number,
        default: 0,
    }, // 点赞
    createDate: {
        type: Date, 
        default: Date.now,
    }
});

module.exports = MsgSchema