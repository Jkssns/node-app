global.code = (code, data, msg) => {
	switch (code) {
		case 200:
			return {
				code,
				msg: 'ok',
				data,
			}
		case 400:
			return {
				code,
				msg: '参数错误',
			}
		case 401:
			return {
				code,
				msg: '暂无权限',
			}
		case 404:
			return {
				code, 
				msg: 'Not Found',
			}
		case 500:
			return {
				code,
				msg,
			}
	}

}