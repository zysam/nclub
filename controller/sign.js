'use strict';

const User = require('../model/user');

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
exports.signup = function* () {
	let profile = this.request.body;
	let _user;
	if (!profile) return this.throw(400, new Error('profile invail'))
	
	let	user = new User(profile);
	try {
		_user = yield user.save;
	} catch (err) {
		this.app.emit('error', err, this);
		this.throw(400, 'profile invail');
	}

	this.status = 201;
	this.body = _user;
}

exports.signin = function* () {
	
}

exports.signout = function* () {
	
}