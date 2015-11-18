'use strict';

const User = require('../model/user');

/**
 * 用户注册
 * example 
 * 	_user = {
 *  	loginname,
 *  	email,
 *  	password,
 *  	
 * 	}
 * 	
 * @method *signup
 */
exports.signup = function* () {
	let _user = this.reqeuest.body;

	let user = new User(_user);

	yield user.save;

	this.status = 201;
	this.body = user
}

exports.signin = function* () {
	
}

exports.signout = function* () {
	
}