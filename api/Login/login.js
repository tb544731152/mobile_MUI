document.write("<script language=javascript src='../../common/js/TimUtil.js'></script>");
window.LoginApi = {
	complateUserInfo: function(data, success) {
		window.TimUtil.postJson('/user/complateUserInfo', data, function(data) {
			if(success) success(data)
		}) 
	},
	getCode: function(data, success) {
		console.log("获取验证码"+data)
		window.TimUtil.postJson('/rh/getCode', data, function(data) {
			if(success) success(data)
		}) 
	},
	loginApi: function(data, success) {
		console.log("开始登陆"+data)
		window.TimUtil.postJson('/login/login', data, function(data) {
			if(success) success(data)
		}) 
	},
	validatePhoneApi: function(data, success) {
		window.TimUtil.postJson('/login/validatePhone' ,data, function(data) {
			if (success) success(data)
		})
	},
	validateCodeApi: function(data, success) {
		window.TimUtil.postJson('/login/validateCode' ,data, function(data) {
			if (success) success(data)
		})
	},
	registerApi: function(data, success) {
		window.TimUtil.postJson('/login/register' ,data, function(data) {
			if (success) success(data)
		})
	}
}
