var mongoose = require('mongoose')
var ObjectId = mongoose.Types.ObjectId

var CommonSchema = new mongoose.Schema({
    // msg: {
    //     type: String,
    //     required: true,
    //     trim: true,
    // },  // 留言
    like: {
        type: Number,
        default: 0,
    }, // 点赞
    // createDate: {
    //     type: Number,
    //     default: Date.now(),
    // },
});

module.exports = CommonSchema