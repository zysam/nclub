'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const schema = new Schema({
	title: String,
	content: String,
	author_id: { type: Schema.ObjectId, ref: 'User' },
	top: { type: Boolean, default: false },//置顶
	good: { type: Boolean, default: false }, //精华贴
	lock: { type: Boolean, default: false }, //被锁定主题
	reply_count: { type: Number, default: 0 },
	visit_count: { type: Number, default: 0 },
	collect_count: { type: Number, default: 0 },
	create_at: { type: Date, default: Date.now },
	update_at: { type: Date, default: Date.now },
	last_reply: { type: Schema.ObjectId, ref: 'User'},
	content_is_html: { type: Boolean },
	tab: { type: String },
	deleted: { type: Boolean, default: false },
});


// Indexes
schema.index({ create_at: -1 });
schema.index({ top: -1, last_reply: -1 });
schema.index({ author_id: 1, create_at: -1 });

// Virtuals

// 属于哪个版块
schema.virtual('tabName').get(function() {
	let tab = this.tab;

	// 默认分类为配置的版本
	let pair = _.find(config.tabs, _pair => _pair[0] === tab)
	return pair ? pair[1] : '';
});


// Plugins
schema.plugin();

// Middleware Hook
schema.pre('save', next => {

})

// Methods
schema.methods = {

}

// Statics
schema.statics = {
	//可能有问题！
	$findById(id) {
		return this
			.findOne({ _id: id })
			.populate({ path: 'author_id', select: 'loginname' })
			.populate({ path: 'last_reply' })
			.populate({ path: 'last_reply.author_id', select: 'loginname', model: 'Reply'})
			.populate({ path: 'last_reply.reply_id', select: 'loginname', model: 'Reply'})
			.exec();
	}
}

/**
 * Expose Topic
 */
module.exports = mongoose.model('Topic', schema);
