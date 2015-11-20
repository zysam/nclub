'use strict';

const user = require('./user');

/**
 * 用户注册
 * example: 
 * 	_user = {
 *  	loginname,
 *  	email,
 *  	pass,
 *  	re_pass,
 * 	}
 * 	
 * @method *signup
 */
exports.signup = user.create

exports.signin = function* () {
	
}

exports.signout = function* () {
	
}