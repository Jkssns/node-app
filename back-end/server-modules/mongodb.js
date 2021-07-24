/*引入*/
const mongoose = require('mongoose');
// 用于异步回调
// mongoose.Promise = require('bluebird');
mongoose.connect(`mongodb://127.0.0.1:27017/users`);

module.exports = mongoose;