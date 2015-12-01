'use strict';

const User = require('../model/user');

exports.show = function* () {
	let name = this.params.name;
	let user;
	
	try {
		user = yield User.findByName(name);
	} catch (err) {
		this.throw(400, err)
	}

	this.body = user;
}


exports.create = function* () {
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

exports.remove = function* () {
	// TODO
}

exports.showSetting = function* () {
	let id = this.session.user._id; // 获取 id
	let user;
	user = yield User.$findById(id);

	this.body = user; // TODO 数据检验器
}

/**
 * 编辑更新用户资料
 * @method *edit
 * @param {object} session user._id, user.loginname
 * @param {object} profile
 *        profile = {
 *        	url, // 个人网站
 *        	loacation, // 所在地点
 *        	weibo, // 个人微博
 *        	signature, // 签名
 *        }
 */
exports.edit = function* () {
	let profile = this.request.body; // 经过验证器的profile
	// profile.id = this.session.user._id;

	let user = New User(profile);

	yield user.updateProfile();

	this.redirect('setting?save=success');
}