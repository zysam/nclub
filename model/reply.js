'use strict';

const mongoose = require('mongoose');
const Schema = require('Schema');

const schema = new Schema({
	content: { type: String },
	topic_id: { type: Schema.ObjectId, ref: 'Topic'},
	author_id: { type: Schema.ObjectId, ref: 'User' },
	reply_id: { type: Schema.ObjectId , ref: 'User'},
	create_at: { type: Date, default: Date.now },
	update_at: { type: Date, default: Date.now },
	content_is_html: { type: Boolean },
	ups: [{type: Schema.ObjectId, ref: 'User' }],
	deleted: {type: Boolean, default: false},
});

// Indexes
schema.index({topic_id: 1});
schema.index({author_id: 1, create_at: -1});

// Virtuals

// avator 头像获取 url

// Plugins
schema.plugin();

// Middleware Hook

// Methods
// 实例方法, 使用controller抽象命名, 调用其它的Model实现扩展方法。
schema.methods = {
	getAuthor() {
		return this
			.model('User')
			.findById(this.author_id, {select : 'loginname'})
			.exec()
	},

	/**
	 * 调用 Topic 来更新最后回复
	 * @method updateTopicLastReply
	 * @author zysam.lam
	 * @date   2015-11-16
	 * @api    Public
	 * @return {[type]}             [description]
	 */
	updateTopicLastReply() {
		return this
			.model('Topic')
			.update({ _id: this.topic_id }, { $set: {last_reply: this.reply_id }})
			.exec()
	}

}

// Statics
schema.statics = {
	$findById(id) {
		return this.findOne({ _id: id }).exec();
	},

	$findAndPopulate(id) {
		return this
			.findById(id)
			.populate({ path: 'author_id', select: 'loginname'})
			.exec()
	}
}

/**
 * Model
 * @api Public
 */
module.exports = mongoose.model('Reply', schema);
