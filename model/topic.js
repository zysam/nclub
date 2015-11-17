'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const schema = new Schema({

});


// Indexes
// schema.index();


// Virtuals

// 属于哪个版块
// schema.virtual()


// Plugins
// schema.plugin();

// Middleware Hook
// schema.pre('save', next => {

// })

// Methods
// schema.methods = {}

// Statics
// schema.statics = {}

/**
 * Expose Topic
 */
module.exports = mongoose.model('Topic', schema);
