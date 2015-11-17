'use strict';

const Topic = require('../model/topic');

exports.show = function *() {
	let topic_id = this.params.tid;
	topic = yield Topic.$findbyId(topic_id);

	this.render('topic/index', {
		topic: topic,
		author_other_topics: other_topics,
		no_reply_topics: no_reply_topics,
		is_uped: isUpe,
	})

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