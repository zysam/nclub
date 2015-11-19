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
	// TODO
}

exports.remove = function* () {
	// TODO
}

exports.edit = function* () {
	// TODO
}