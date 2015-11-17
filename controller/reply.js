'use strict';

const Reply = require('../model/reply');

/**
 * 创建回复
 * 
 * @example
 * 	_reply = {
 * 		content,
 * 		topic_id,
 * 		author_id,
 * 		reply_id,
 * 	}
 * 	
 * @method *create
 * @api Public 
 * @yield  {[type]}   [description]
 */
exports.create = function *() {
	const _reply = this.request.reply;
	const topic_id = this.params.topic_id;
	const reply = new Reply(_reply);

	// 如果其中一个保存失败？会回退不？
	try {
		yield reply.save();
		yield [
			reply.updateTopicLastReply(),
			reply.updateUserScore()
			]
	} catch (e) {
		this.throw(400, `reply save erorr: ${e}`)
	}

	// this.status = 201;
	this.redirect(`/topic/${topic_id}`);

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