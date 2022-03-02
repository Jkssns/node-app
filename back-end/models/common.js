var redis = require('redis')
const client = redis.createClient( 6379, '39.97.106.72');
const util = require('util');

module.exports = client