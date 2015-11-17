'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const schema = new Schema({
  name: { type: String},
  loginname: { type: String},
  pass: { type: String },
  email: { type: String},
  url: { type: String },
  profile_image_url: {type: String},
  location: { type: String },
  signature: { type: String },
  profile: { type: String },
  weibo: { type: String },
  avatar: { type: String },
  githubId: { type: String},
  githubUsername: {type: String},
  githubAccessToken: {type: String},
  is_block: {type: Boolean, default: false},

  score: { type: Number, default: 0 },
  topic_count: { type: Number, default: 0 },
  reply_count: { type: Number, default: 0 },
  follower_count: { type: Number, default: 0 },
  following_count: { type: Number, default: 0 },
  collect_tag_count: { type: Number, default: 0 },
  collect_topic_count: { type: Number, default: 0 },
  create_at: { type: Date, default: Date.now },
  update_at: { type: Date, default: Date.now },
  is_star: { type: Boolean },
  level: { type: String },
  active: { type: Boolean, default: false },

  receive_reply_mail: {type: Boolean, default: false },
  receive_at_mail: { type: Boolean, default: false },
  from_wp: { type: Boolean },

  retrieve_time: {type: Number},
  retrieve_key: {type: String},

  accessToken: {type: String},
});


// Indexes
schema.index({loginname: 1}, {unique: true});
schema.index({email: 1},{unique: true});
schema.index({score: -1});
schema.index({githubId: 1});
schema.index({accessToken: 1});

//Virtuals

// avator 头像获取 url
schema.virtual('avatar_url').get(function() {
	let url = this.avatar || ('https://gravatar.com/avatar/' + utility.md5(this.email.toLowerCase()) + '?size=48');

	// www.gravatar.com 被墙
	url = url.replace('www.gravatar.com', 'gravatar.com');

	// 让协议自适应 protocol，使用 `//` 开头
	if (url.indexOf('http:') === 0) {
	  url = url.slice(5);
	}

	// 如果是 github 的头像，则限制大小
	if (url.indexOf('githubusercontent') !== -1) {
	  url += '&s=120';
	}

	return url;
});

schema.virtual('isAdvanced').get(function () {
	return this.score > 700 || this.is_star	;
});

// Plugins
schema.plugin();

// Middleware Hook
// schema.pre('save', next => {

// });

// Methods
// schema.methods = {

// }

// Statics
schema.statics = {

	findByNames(names) {
		return this.find({ loginname: { $in: names }}).exec();
	},

	findByName(name) {
		return this.findOne({ loginname: name }).exec();
	},

	$findById(id) {
		return this.findOne({ _id: id }).exec();
	},

	findByIds(ids) {
		return this.find({ _id: { $in: ids }}).exec();
	},

	findByMail(email) {
		return this.findOne({ email: email }).exec();
	},

  query(query, opt) {
    return this.find(query, opt).exec();
  }

}

/**
 * Expose Model User
 * @api public
 */
module.exports = mongoose.model('User', schema);
