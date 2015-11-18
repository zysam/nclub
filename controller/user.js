'use strict';

const User = require('../model/user');

exports.show = function* () {
	let id = this.params.id;
	let user;
	
	try {
		user = yield User.$findById(id);

	} catch (e) {
		this.throw(400, e)
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