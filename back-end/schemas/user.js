var mongoose = require('mongoose')
//加盐数
var SALT_WORK_FACTOR = 10
// var UserSchema = new mongoose.Schema({
//   name: {
//     unique: true,
//     type: String
//   },
//   nickname: String, // 昵称
//   sex: Boolean, // 性别 0-男  1-女
//   iphone: {     // 电话号
//     type: String,
//     max: 20,
//   },
//   password: String,
//   avator: String,
//   meta: {
//     createAt: {
//       type: Date,
//       default: Date.now()
//     },
//     updateAt: {
//       type: Date,
//       default: Date.now()
//     }
//   }
// });

// UserSchema.statics = {
//   fetch: function (cb) {
//     return this
//       .find({})
//       .sort('meta.updateAt')
//       .exec(cb)
//   },
//   findById: function (id, cb) {
//     return this
//       .findOne({_id: id})
//       .exec(cb)
//   }
// }

var UserSchema = new mongoose.Schema({
  user: String,
  age: Number, // 昵称
});

UserSchema.statics = {
  fetch: function (cb) {
    return this
      .find({})
      .sort('meta.updateAt')
      .exec(cb)
  },
  findById: function (id, cb) {
    return this
      .findOne({_id: id})
      .exec(cb)
  }
}

module.exports = UserSchema