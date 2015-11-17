/**
 *  @author zysam.lam 
 */
'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 *  schema 建立模型
 *  @type {Schema}
 */
const schema = new Schema({
	type: String, // 类型
	master_id: { type: Schema.ObjectId, ref: 'User'},// 通知发起人
	author_id: { type: Schema.ObjectId, ref: 'User'}, // 作者
	topic_id: { type: Schema.ObjectId, ref: 'Topic'}, //话题
	has_read: { type: Boolean, default: false}, // 是否已读
	create_at: { type: Date, default: Date.now},
});

// Indexes
schema.index({
	master_id: 1, 
	has_read: -1, 
	create_at: -1
});

//Virtuals

// Plugins

/**
 *  timeFriendly
 *  	1秒前，5分钟前，昨天，两天前
 *  	一周前...
 */
schema.plugin(plugin.timeFriendly);

// Middleware Hook


// Methods
// schema.methods = {}

// Statics
// all return promise
schema.statics = {
	
	/**
	 *  根据用户ID，获取已读消息列表
	 *  @param       {string}    id 
	 *  @return      {promise}                    
	 */
	countRead(id) {
		return this.count({master_id: id, has_read: true}).exec()
	},

	/**
	 *  根据用户ID，获取未读消息列表
	 *  @param  {string}    id 
	 *  @return {promise}                    
	 */
	countUnread(id) {
		return this.count({master_id: id, has_read: false}).exec()
	},

	/**
	 *  根据用户ID，查找已读消息
	 *  @param  {String}   id 
	 *  @return {promise}      
	 */
	findRead(id) {
		return this
			.find({master_id: id})
			.where({has_read: true})
			.sort('-create_at')
			.limit(20)
			.exec()
	},

	/**
	 *  根据用户ID，查找未读消息
	 *  @param  {string}   userId   
	 *  @param  {Array}   messages 
	 *  @return {promise}
	 */
	findUnread(id) {
		return this
			.find({master_id: id})
			.where({has_read: false})
			.sort('-create_at')
			.exec()
	},

	/**
	 *  将消息设置成已读
	 *  @param  {string}   userId   
	 *  @param  {Array}   messages 
	 *  @return {promise}
	 */
	updateToRead(ids, user) {
		return this
			.find({_id: { $in: ids } })
			//.where({ master_id: user })
			.update({ has_read: true })
			.exec()
	},
	
	findAndPopulate(id) {
		return this
			.find({id: _id})
			.populate({ path: 'master_id', select: 'name' })
			.populate({ path: 'author_id', select: 'name' })
			.populate({ path: 'topic_id', select: 'name' })
			.exec()
	},

}

/**
 * Model And exports
 * @api Public
 */
module.exports = mongoose.model('User', schema);

