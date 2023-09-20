// var redis = require('redis')
// const client = redis.createClient(6379, '127.0.0.1');
const util = require('util');

global.handleMySqlErr = (err) => {
	throw err;
}

global.code = (code, data, message) => {
	switch (code) {
		case 200:
			return {
				code,
				message: 'ok',
				data,
			}
		case 400:
			return {
				code,
				message: '参数错误',
			}
		case 401:
			return {
				code,
				message: '暂无权限',
			}
		case 404:
			return {
				code, 
				message: 'Not Found',
			}
		case 500:
			return {
				code,
				message,
			}
	}
}

// global.redis = client