'use strict';

const Message = require('./model/message');

exports.show = function* () {
	let user_id = this.session.user._id;

	let count = yield [
		Message.countRead(user_id),
		Message.countUnread(user_id)
	];
	

	this.body = {
		has_read_messages,
		hasnot_read_messages
	}

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